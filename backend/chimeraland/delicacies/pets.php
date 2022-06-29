<?php

require_once(__DIR__ . '/../../vendor/autoload.php');
session_start();
header("Access-Control-Allow-Origin: *");

if (!isset($_SESSION['visitor'])) {
  $new_session = uniqid();
  $_SESSION['visitor'] = $new_session;
};
$session = $_SESSION['visitor'];

$file = __DIR__ . '/pets.json';
$data = json_decode(file_get_contents($file), true);

if (isset($_POST['add'])) {
  header('content-type: text/plain');
  $name = $_POST['pet-name'];
  $delicacies = explode('\n', $_POST['delicacies']);
  $neededObject = array_filter(
    $data,
    function ($e) use (&$name) {
      return $e->name == $name;
    }
  );
  if (empty($neededObject)) {
    $data->data[] = ['name' => $name, 'delicacies' => $delicacies];
  }
  exit(var_dump($_POST, $neededObject));
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Pets - Chimeraland</title>
  <!-- Bootstrap CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet" />
  <style>
    .img-s {
      width: 15px;
      height: 15px;
    }

    label {
      text-align: right;
    }

    body {
      height: 100%;
      width: 100%;
    }

    main {
      width: 100%;
      text-align: left;
    }
  </style>
</head>

<body>

  <center>
    <main>
      <form action="?<?= $session ?>" method="post" class="form-horizontal">
        <input type="hidden" name="add" value="<?= $session ?>">
        <div class="row">
          <div class="form-group row col-md-12 mb-2">
            <label for="BeastName" class="col-2 col-form-label">Beast Name</label>
            <div class="col-10">
              <input type="text" name="pet-name" id="BeastName" class="form-control" placeholder="Insert Animal Name" required>
            </div>
          </div>

          <div class="form-group row col-md-12 mb-2">
            <label for="Attr" class="col-2 col-form-label">Delicacies</label>
            <div class="col-10">
              <textarea type="text" no-save="true" id="Attr" name="attr" cols="10" rows="10" class="form-control" placeholder="Pet Delicacies/Tasty" required></textarea>
              <small class="form-text text-muted">Must Be Separated by line</small>
            </div>
          </div>

          <div class="text-center col-md-12 p-2">
            <button type="submit" class="btn btn-block btn-primary mb-2">Confirm pet</button>
          </div>
        </div>
      </form>
    </main>
  </center>

  <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

  <script src="https://raw.githack.com/dimaslanjaka/smartform/master/dist/release/bundle.js"></script>
  <script>
    (function() {
      formsaver(true);
    })();
    var forms = document.querySelectorAll("form");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        function(e) {
          var buttons = this.querySelectorAll('[type="submit"]');
          buttons.forEach(function(button) {
            button.setAttribute("disabled", "disabled");
          });
        },
        false
      );
    });
  </script>

</body>

</html>