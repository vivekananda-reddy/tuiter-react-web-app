export default function WhoToFollowListItem({who}) {
    return(
        <li className="list-group-item">
          <div className="row">
            <div className="col-2 d-flex align-items-center pe-0">
              <img src={who.avatarIcon} className="img-fluid rounded-4"/>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col pe-0">
                  <span className="fw-bold">{who.userName} </span>
                  <span><i className="fa-solid fa-circle-check"></i></span>
                </div>

              </div>
              <div className="row pe-0">
                <span>@{who.handle}</span>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center ps-0">
              <button className="btn btn-primary rounded-pill">Follow</button>
            </div>
          </div>
        </li>
    )

}