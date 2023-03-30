Promise.all(
  [
    'https://backend.webmanajemen.com/tlon/quiz.php?show'
    // 'https://crossorigin.me/http://backend.webmanajemen.com/tlon/quiz.php?show'
  ].map(function (url) {
    return fetch(url)
      .then(function (response) {
        return response.text();
      })
      .catch((_e) => {
        return '';
      });
  })
).then((quiz) => {
  const split = quiz
    .map((str) => str.split(/\r?\n/gm).map((s) => s.trim()))
    .flat(2)
    .filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
  // console.log(split);

  const searchEl = document.getElementById('quizTerm');
  const onlyO = document.getElementById('showOnly');

  const doSearch = function (e) {
    if (e instanceof Event) e.preventDefault();

    const search = searchEl.value.trim();

    // return empty
    if (search.length === 0) {
      createLi(split);
      return;
    }

    /**
     * @type {string[]}
     */
    const result = [];

    // find start with
    const startWith = split.filter((str) => new RegExp('^' + search, 'gi').test(str));
    result.push(...startWith);
    // console.log(startWith);
    // find wildcard
    var rx = new RegExp('"([^"]*' + search + '[^"]*)"', 'gi');
    const test1 = split.filter((str) => rx.test(str));
    result.push(...test1);
    var reg = new RegExp('^\\s?' + search, 'gi');
    const test2 = split.filter((str) => reg.test(str));
    result.push(...test2);
    // find includes
    const includes = split.filter((str) => str.includes(search));
    result.push(...includes);
    //console.log({ startWith, test1, test2, includes });

    let filteredResult = result.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });

    if (onlyO.checked) {
      filteredResult = filteredResult.filter((str) => str.endsWith('(O)'));
    }
    createLi(filteredResult);
  };

  doSearch();

  searchEl.addEventListener('input', doSearch);
  onlyO.addEventListener('change', doSearch);

  document.getElementById('nosubmit').addEventListener('submit', doSearch);
});

/**
 *
 * @param {string[]} listData
 */
function createLi(listData) {
  const qresult = document.getElementById('qresult');
  // emptying existing inner
  qresult.innerHTML = '';

  // Make a container element for the list
  let listContainer = document.createElement('div');

  // Make the list
  let listElement = document.createElement('ul');

  // Make the list item
  let listItem = document.createElement('li');

  // Add it to the page
  qresult.appendChild(listContainer);
  listContainer.appendChild(listElement);

  // Set up a loop that goes through the items in listItems one at a time
  let numberOfListItems = listData.length;

  for (let i = 0; i < numberOfListItems; ++i) {
    // Add the item text

    // Use this if the array elements contain HTML
    // listItem.innerHTML = listData[i];
    // If not, use the line below

    // Use this if the array elements are text only
    listItem.textContent = listData[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);

    // Reset the list item
    listItem = document.createElement('li');
  }
}
