export default function PostSummaryItem(post) {
    return(`
    
         <li class="list-group-item">
          <div class="row">
            <div class="col-10">
                ${(post.topic)?
                        `<div class="row">
                            <div class="col">
                                <span class="text-muted">${post.topic}</span>
                            </div>
                        </div>`
                  :
                  ""
                }
                
                ${(post.userName) ?
                  `<div class="row">
                      <div class="col">
                          <span class="fw-bold">${post.userName}</span>
                          <span><i class="fa-solid fa-circle-check"></i></span>
                          <span class="text-muted"> - ${post.time}</span>
                      </div>
                  </div>`
                                  :
                  ""
                }
                  
                ${(post.title) ?
                  `<div class="row">
                      <div class="col">
                            <span class="fw-bold">
                                ${post.title}
                            </span>
                      </div>
                  </div>`
                               :
                  ""
                }
                
                ${(post.tweets) ?
                  `<div class="row">
                      <div class="col">
                          <span class="text-muted">${post.tweets} Tweets</span>
                      </div>
                  </div>`
                                :
                  ""
                }
            </div>
            <div class="col-2">
              <img src=${post.image} class="img-fluid rounded-4  pt-1 pb-1">
            </div>
          </div>
        </li>
    
    
    `)

}