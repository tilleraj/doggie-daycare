import React from 'react';

import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog d-flex col-12 col-sm-6 col-md-4">
        <div className="card mb-4 w-100">
          <img src={dog.imgUrl} className="card-img-top" alt={`${dog.name} being cute`}/>
          <div className="card-body d-flex justify-content-end flex-column">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">{dog.color}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
