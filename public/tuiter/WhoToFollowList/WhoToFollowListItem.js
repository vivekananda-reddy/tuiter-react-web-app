export default function WhoToFollowListItem(who) {
    return(`
        <li class="list-group-item">
          <div class="row">
            <div class="col-2 d-flex align-items-center pe-0">
              <img src=${who.avatarIcon} class="img-fluid rounded-4">
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col pe-0">
                  <span class="fw-bold">${who.userName}</span>
                  <span><i class="fa-solid fa-circle-check"></i></span>
                </div>

              </div>
              <div class="row pe-0">
                <span>@${who.handle}</span>
              </div>
            </div>
            <div class="col-3 d-flex align-items-center ps-0">
              <button class="btn btn-primary rounded-pill">Follow</button>
            </div>
          </div>
        </li>
    `)

}