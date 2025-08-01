export default function DateRangePicker({ dateRange, onDateRangeChange }) {
  return <div>Picker (from: {dateRange.from.toDateString()}, to: {dateRange.to.toDateString()})</div>;
}