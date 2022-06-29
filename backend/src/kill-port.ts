'use strict';

import net from 'net';
import sh from 'shell-exec';

export default function killPort(port: string | number, method = 'tcp') {
  port = Number.parseInt(String(port));

  if (!port) {
    return Promise.reject(new Error('Invalid port number provided'));
  }

  if (process.platform === 'win32') {
    sh('netstat -nao').then((res) => {
      const { stdout } = res;
      if (!stdout) return res;

      const lines = stdout.split('\n');
      // The second white-space delimited column of netstat output is the local port,
      // which is the only port we care about.
      // The regex here will match only the local port column of the output
      const lineWithLocalPortRegEx = new RegExp(
        `^ *${method.toUpperCase()} *[^ ]*:${port}`,
        'gm'
      );
      const linesWithLocalPort = lines.filter((line) =>
        line.match(lineWithLocalPortRegEx)
      );

      const pids = linesWithLocalPort.reduce((acc, line) => {
        const match = line.match(/(\d*)\w*(\n|$)/gm);
        return match && match[0] && !acc.includes(match[0])
          ? acc.concat(match[0])
          : acc;
      }, []);

      return sh(`TaskKill /F /PID ${pids.join(' /PID ')}`);
    });
  } else {
    sh('lsof -i -P').then((res) => {
      const { stdout } = res;
      if (!stdout) return res;
      const lines = stdout.split('\n');
      const existProccess =
        lines.filter((line) => line.match(new RegExp(`:*${port}`))).length > 0;
      if (!existProccess)
        return Promise.reject(new Error('No process running on port'));

      return sh(
        `lsof -i ${method === 'udp' ? 'udp' : 'tcp'}:${port} | grep ${
          method === 'udp' ? 'UDP' : 'LISTEN'
        } | awk '{print $2}' | xargs kill -9`
      );
    });
  }
}

/**
 * Check port in use
 * @param port
 * @param callback
 */
export function portInUse(
  port: number | string,
  callback: (arg0: boolean) => void
) {
  var server = net.createServer(function (socket) {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
  });

  server.on('error', function () {
    callback(true);
  });
  server.on('listening', function () {
    server.close();
    callback(false);
  });

  server.listen(parseInt(String(port)), '127.0.0.1');
}
