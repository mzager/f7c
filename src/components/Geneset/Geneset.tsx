import { FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import * as React from 'react';

export class Geneset extends React.Component<{}, { source: string; filter: string }> {
  constructor(props: any) {
    super(props);
    this.state = { source: '', filter: '' };
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="source">Source</InputLabel>
          <Select
            value={this.state.source}
            onChange={this.handleSourceChange}
            inputProps={{
              id: 'source',
              name: 'source',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="filter">Filter</InputLabel>
          <Input
            inputProps={{
              id: 'filter',
            }}
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </FormControl>
      </form>
    );
  }

  protected handleFilterChange(event: any) {
    this.setState({ filter: event.target.value });
  }
  protected handleSourceChange(event: any) {
    this.setState({ source: event.target.value });
  }

  protected handleSubmit(event: any) {
    event.preventDefault();
  }
}
