import React from 'react'


class Title extends React.Component {
    render() {
        return(
                <div className="text-left">
                     <h1 className="text-left  display-1"><b>{this.props.title1}</b></h1>
                     <h1 className="text-left  display-3"><b>{this.props.title2}</b></h1>
                     <h4>{this.props.subtitle}</h4  >
                  </div>
        )
    }
}

export default Title
