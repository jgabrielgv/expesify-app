import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if(e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
            placeholder="Search expenses"
            type="text"
            className="text-input"
            value={this.props.filters.text}
            onChange={this.onTextChange} />
          </div>
          <div className="input-group__item">
            <select
            className="select"
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          </div>
          <div className="input-group__item">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch, props) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (value) => dispatch(setTextFilter(value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);