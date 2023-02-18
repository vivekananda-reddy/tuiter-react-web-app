export default function PostItem(post) {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2 ps-md-4 pe-0">
                <img src="${post.proPic}" class="img-fluid wd-profile-pic-size"/>
            </div>
            <div class="col-10 ps-0">
                <div class="row">
                    <div class="col">
                        <span><b>${post.userName}</b></span>
                        ${(post.verified)? `<span><i class="fa-solid fa-circle-check"></i></span>` : ""}
                        <span class="wd-graded-out-font-color">@${post.handle}</span>
                         <span class="wd-graded-out-font-color"> . ${post.time}</span>
                         <span><i class="fa-solid fa-ellipsis wd-graded-out-font-color float-end"></i></span>
                    
                    </div>
                    
                </div>
                <div class="row mb-2">
                    <div class="col">
                        <span>${post.title}</span>
                        
                    </div>
                </div>
                
                <div class="wd-graded-out-border wd-rounded-border">
                <div class="row">
                   <div class="col">
                        <img src="${post.postImage}" class="img-fluid wd-border-image-top ${(post.imageTextTitle)? `border-bottom`:`wd-border-image-bottom`}"/>
                    </div>
                    

                </div>
                
                ${(post.imageTextTitle)?
                `<div class="row m-2">
                    <div class="row">
                        <div class="col">
                             <span>${post.imageTextTitle}</span>
                        </div>
                    </div>
                        <div class="row wd-graded-out-font-color">
                            <div class="col">
                                <span>${post.imageText}</span>
                            
                            </div>
                        </div>
                    </div>
                ` : ""}
                </div>
                <div class="row wd-graded-out-font-color mt-3">
                    <div class="col-3">
                        <span class="me-3">
                               <i class="fa-regular fa-comment"></i>
                        </span>
                   
                        <span>${post.comments}</span>
                        
                     </div>
                    <div class="col-3">
                        
                        <span class="me-3">
                               <i class="fa-solid fa-retweet"></i>
                        </span>
                        <span>${post.retweets}</span>
                        
                    </div>
                    <div class="col-3">
                        <span class="me-3">
                               <i class="fa-regular fa-heart"></i>
                        </span>
                        <span>${post.likes}</span>
                        
                        </div>
                    <div class="col-3">
                        <span class="me-3">
                               <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </li>
        
    
    `)
}