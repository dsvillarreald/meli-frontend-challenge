import React from 'react';

const Loading = () => {
    return (
      <div className="loading">
        <div className="loading__inner">
            <div className="loading__content">
              <span className="spinner"></span>
            </div>
        </div>
      </div>
    );
}
 
export default Loading;