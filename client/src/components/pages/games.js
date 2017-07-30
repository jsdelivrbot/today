import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Games extends Component {
  render() {
    return (
      <table>
        <tbody>
        <tr>
          <th>NOTES</th>
          <th>INTERVALS</th>
          <th>TRIADS</th>
        </tr>

        <tr>
          <td>Level 1</td>
        </tr>

        <tr>
          <td><Link to="/full-fretboard">Full Fretboard</Link></td>
          <td><Link>Root, Interval</Link></td>
          <td><Link>Fill in Notes</Link></td>
        </tr>

        <tr>
          <td><Link>Quadrants</Link></td>
          <td><Link>Sequences</Link></td>
          <td><Link>Fill in Intervals</Link></td>
        </tr>

        <tr>
          <td><Link>Boxes</Link></td>
          <td><Link></Link></td>
        </tr>

        <tr>
          <td><Link>Sequences</Link></td>
          <td><Link></Link></td>
        </tr>

        <tr>
          <td>Level 2</td>
        </tr>

        <tr>
          <td>Level 3</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default Games;
