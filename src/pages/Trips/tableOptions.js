const customTotal = (from, to, size) => (
    <div className="react-bootstrap-table-pagination-total mt-4">
      Всего: <span>{size}</span>
    </div>
  );

  const sizePerPageOptionRenderer = ({
    text,
    page,
    onSizePerPageChange
  }) => (
    <li
      key={text}
      role="presentation"
      className="dropdown-item"
    >
      <a
        href="#"
        tabIndex="-1"
        role="menuitem"
        data-page={page}
        className="d-flex w-100"
        onMouseDown={(e) => {
          e.preventDefault();
          onSizePerPageChange(page);
        }}
      >
        {text}
      </a>
    </li>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: '<',
    nextPageText: '>',
    lastPageText: '>>',
    nextPageTitle: '<<',
    prePageTitle: '<',
    firstPageTitle: '>',
    lastPageTitle: '>>',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageOptionRenderer,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: '25', value: 25
    }, {
      text: '50', value: 50
    }, {
      text: '100', value: 100
    }]
  };

  export default options;