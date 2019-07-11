import React from 'react';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk d-flex col-12 col-sm-6 col-md-4">
        <div className="card mb-4 w-100">
          <div className="card-body d-flex justify-content-end flex-column">
            <p className="card-title">{walk.dogName}</p>
            <p className="card-text">{walk.employeeName}</p>
            <p className="card-text">{walk.date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Walk;
