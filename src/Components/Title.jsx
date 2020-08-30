import React from 'react'


class Title extends React.Component {
    render() {
        return(
                <div className="text-center">
                     <h1 className="text-center  display-1"><b>{this.props.title1}</b></h1>
                     <h1 className="text-center  display-3"><b>{this.props.title2}</b></h1>
                     <h4>{this.props.subtitle}</h4  >
                  </div>
        )
    }
}

export default Title
