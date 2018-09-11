import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableGrid from '../components/TableGrid';
import { bindActionCreators } from 'redux';
import { getCountry, resetSearch } from '../actions';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        { name: 'rank', title: 'Rank' },
        { name: 'flag', title: 'Flag' },
        { name: 'country', title: 'Country' },
        { name: 'gold', title: 'Gold' },
        { name: 'silver', title: 'Silver' },
        { name: 'bronze', title: 'Bronze' },
        { name: 'total', title: 'TOTAL' },
      ],
      inputValue: '',
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.getCountry(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  handleInputChange=(e) => {
    if (this.props.invalidSearch) {
      this.props.resetSearch();
    }
    this.setState({
      inputValue: e.target.value,
    });
  }
  render() {
    const rows = this.props.chosenCountries;

    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input type="text" placeholder="Type in a country" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button type="submit" onClick={this.handleClick}>Find</button>
        </form>
        {this.props.invalidSearch &&
        <h2>Invalid - Search again</h2>}
        <hr />
        <TableGrid className="table-grid" columns={this.state.columns} rows={rows} />
        {/* <h2>{this.props.medals[0].country_abbreviation}</h2> */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCountry, resetSearch }, dispatch);
}

function mapStateToProps({ countriesAll, chosenCountries, invalidSearch }) {
  return { countriesAll, chosenCountries, invalidSearch };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
