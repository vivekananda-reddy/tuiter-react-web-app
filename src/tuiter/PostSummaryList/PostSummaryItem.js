export default function PostSummaryItem({post}) {
    return( 
        <li className="list-group-item">
          <div className="row">
            <div className="col-10">
                {(post.topic)?
                        <div className="row">
                            <div className="col">
                                <span className="wd-graded-out-font-color">{post.topic}</span>
                            </div>
                        </div>
                  :
                  ""
                }
                
                {(post.userName) ?
                  <div className="row">
                      <div className="col">
                          <span className="fw-bold">{post.userName} </span>
                          <span><i className="fa-solid fa-circle-check"></i></span>
                          <span className="wd-graded-out-font-color"> - {post.time}</span>
                      </div>
                  </div>
                                  :
                  ""
                }
                  
                {(post.title) ?
                  <div className="row">
                      <div className="col">
                            <span className="fw-bold">
                                {post.title}
                            </span>
                      </div>
                  </div>
                               :
                  ""
                }
                
                {(post.tweets) ?
                  <div className="row">
                      <div className="col">
                          <span className="wd-graded-out-font-color">{post.tweets} Tweets</span>
                      </div>
                  </div>
                                :
                  ""
                }
            </div>
            <div className="col-2">
              <img src={post.image} className="img-fluid rounded-4  pt-1 pb-1"/>
            </div>
          </div>
        </li>
    );

}