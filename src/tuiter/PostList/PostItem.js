export default function PostItem({post}) {
    return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-2 ps-md-4 pe-0">
                <img src={post.proPic} className="img-fluid wd-profile-pic-size"/>
            </div>
            <div className="col-10 ps-0">
                <div className="row">
                    <div className="col">
                        <span><b>{post.userName} </b></span>
                        {(post.verified)? <span><i className="fa-solid fa-circle-check"></i></span> : ""}
                        <span className="wd-graded-out-font-color"> @{post.handle}</span>
                         <span className="wd-graded-out-font-color"> . {post.time}</span>
                         <span><i className="fa-solid fa-ellipsis wd-graded-out-font-color float-end"></i></span>
                    
                    </div>
                    
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <span>{post.title}</span>
                        
                    </div>
                </div>
                
                <div className="wd-graded-out-border wd-rounded-border">
                <div className="row">
                   <div className="col">
                        <img src={post.postImage} className={`img-fluid wd-border-image-top ${(post.imageTextTitle)? 'border-bottom':'wd-border-image-bottom'}`}/>
                    </div>
                    

                </div>
                
                {(post.imageTextTitle)?
                <div className="row m-2">
                    <div className="row">
                        <div className="col">
                             <span>{post.imageTextTitle}</span>
                        </div>
                    </div>
                        <div className="row wd-graded-out-font-color">
                            <div className="col">
                                <span>{post.imageText}</span>
                            
                            </div>
                        </div>
                    </div>
                 : ""}
                </div>
                <div className="row wd-graded-out-font-color mt-3">
                    <div className="col-3">
                        <span className="me-3">
                               <i className="fa-regular fa-comment"></i>
                        </span>
                   
                        <span>{post.comments}</span>
                        
                     </div>
                    <div className="col-3">
                        
                        <span className="me-3">
                               <i className="fa-solid fa-retweet"></i>
                        </span>
                        <span>{post.retweets}</span>
                        
                    </div>
                    <div className="col-3">
                        <span className="me-3">
                               <i className="fa-regular fa-heart"></i>
                        </span>
                        <span>{post.likes}</span>
                        
                        </div>
                    <div className="col-3">
                        <span className="me-3">
                               <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </li>
        
    )
}