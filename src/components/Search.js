import React from "react";

class Search extends React.Component {

    state={
        search:'',
    }


    keyHandler=(event)=>{
        if(event.key==='Enter'){
            this.props.searchMovies(this.state.search);
        }
    }



    render() {
        return (
          <div className="row">


                  <div className="input-field">
                      <input
                        className="validate"
                        placeholder='Search and press Enter'
                        type="search"
                        value={this.state.search}
                        onChange={(event)=>this.setState({search:event.target.value})}
                        onKeyDown={this.keyHandler}
                      />
                    <button
                      className='btn search-btn' onClick={()=>this.props.searchMovies(this.state.search)}>Search
                    </button>
                  </div>
              <div>

                      <label>
                          <input className="with-gap" name="type" type="radio"/>
                          <span>All</span>
                      </label>

              </div>
          </div>
        )


    }
}


export {Search}