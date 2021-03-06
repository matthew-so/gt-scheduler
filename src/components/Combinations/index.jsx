import React, { PureComponent } from 'react';
import { Calendar } from '../';
import { classes } from '../../utils';
import './stylesheet.scss';

class Combinations extends PureComponent {
  render() {
    const { className, combinations, crns, pinnedCrns, onSetOverlayCrns, onSetPinnedCrns } = this.props;

    return (
      <div className={classes('Combinations', className)}>
        {
          combinations.map((combination, i) => (
            <div className="combination" key={i}
                 onMouseEnter={() => onSetOverlayCrns(combination)}
                 onMouseLeave={() => onSetOverlayCrns([])}
                 onClick={() => onSetPinnedCrns([...pinnedCrns, ...combination])}>
              <div className="number">{i + 1}</div>
              <Calendar className="preview" pinnedCrns={[...pinnedCrns, ...combination]} overlayCrns={[]}
                        crns={crns} key={i} preview/>
            </div>
          ))
        }
      </div>
    );
  }
}


export default Combinations;
