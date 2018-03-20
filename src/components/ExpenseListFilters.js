import React from 'react';
// import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render() {
    return (
      <div>
      <input 
        type="text" 
        value={this.props.filters.text} 
        onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value));
      }} />
      <select
        value={this.props.filters.sortBy}
        onChange={(e) => {
          this.props.dispatch(e.target.value === 'date' ?
            sortByDate() : sortByAmount()
        );
      }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker 
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        startDateId="startDate"
        endDateId="endDate"
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);