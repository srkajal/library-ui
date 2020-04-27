import React from 'react';
import './App.css';
import Library from './components/library';
import { getLibrary } from './api/LibraryApi';
import { getBookByLibraryId } from './api/BookApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        libraries: [],
        books: [],
        show: false
      }
    }
  }

  componentDidMount() {
    this.fetchLibrariesData();
  }

  fetchLibrariesData() {
    getLibrary().then(responseData => {
      //console.log('Libraries Response: ', responseData);
      this.setState({
        data: Object.assign(this.state.data, { libraries: responseData })
      });
    });
  }

  fetchBooksDataByLibraryId(libraryId) {
    getBookByLibraryId(libraryId).then(responseData => {
      console.log('Books Response: ', responseData);
      this.setState({
        data: Object.assign(this.state.data, { books: responseData })
      });
    });
  }

  getBookByLibraryId = (libraryId) => {
    console.log("LibraryId: ", libraryId);
    this.fetchBooksDataByLibraryId(libraryId);
  }

  handleClose = () => this.setState({ data: Object.assign(this.state.data, { show: false }) });
  handleShow = () => this.setState({ data: Object.assign(this.state.data, { show: true }) });

  render() {
    return (
      <div className="container">
        < Library
          data={this.state.data}
          getBookByLibraryId={this.getBookByLibraryId}
          handleClose={this.handleClose}
          handleShow={this.handleShow} />
      </div>
    );
  }

}

export default App;
