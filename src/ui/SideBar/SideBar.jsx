import { useEffect } from 'react';

const SideBar = ({ isVisible }) => {

  useEffect(() => {
    const sidebarElement = document.querySelector('.sidebar'); // Use querySelector to get the first element with the class 'sidebar'
    if (sidebarElement) {
      sidebarElement.scrollTop = sidebarElement.scrollHeight;
    }
  }, [isVisible.first, isVisible.second, isVisible.third]);

  return (
    <div className="App__sidebar sidebar">
      <div className="sidebar__item sidebar__item--active">
        <h3>Article 1</h3>
        General Provisions
      </div>

      <div className="sidebar__item">
        Chapter 1
        Title, Establishment of Controls and Interpretation of Regulations
      </div>

      <div className="sidebar__nav-item nav-item">
        <div className="nav-item__top">
          <a className="nav-item__number" href="#11-10">
            11
          </a>
        </div>

        <div className="nav-item__page">
          <a className="nav-item__number" href="#11-10">
            11-10
          </a>

          <p className="nav-item__description">
            ESTABLISHMENT AND SCOPE OF CONTROLS, ESTABLISHMENT OF DISTRICTS,
            AND INCORPORATION OF MAPS
          </p>
        </div>

        <div className="sidebar__nav-item nav-item">
          <div className="nav-item__top">
            <a className="nav-item__number" href="#11-12">
              11-12
            </a>

            <h4 className="nav-item__title">
              Establishment of Districts
            </h4>
          </div>

          <div className="sidebar__nav-item nav-item">
            <a className="nav-item__number" href="#11-122">
              11-122
            </a>

            <p className="nav-item__description">
              Districts established
            </p>
          </div>
        </div>

        {isVisible.first && (
          <div className="sidebar__nav-item nav-item">
            <div className="nav-item__top">
              <a className="nav-item__number" href="#11-30">
                11-30
              </a>

              <h4 className="nav-item__title">
                BUILDING PERMITS ISSUED BEFORE EFFECTIVE DATE OF AMENDMENT
              </h4>
            </div>

            <div className="sidebar__nav-item nav-item">
              <a className="nav-item__number" href="#11-31">
                11-31
              </a>

              <p className="nav-item__title">
                General Provision
              </p>
            </div>
          </div>
        )}

        {isVisible.second && (
          <div className="sidebar__nav-item nav-item">
            <div className="nav-item__top">
              <a className="nav-item__number" href="#11-40">
                11-40
              </a>

              <h4 className="nav-item__title">
                EXCEPTIONS, VARIANCES, AUTHORIZATION OR PERMITS
              </h4>
            </div>

            <div className="sidebar__nav-item nav-item">
              <a className="nav-item__number" href="#11-46">
                11-46
              </a>

              <p className="nav-item__description">
                Authorizations or Special Permits Filed Prior to [date of adoption]
              </p>
            </div>
          </div>
        )}

        {isVisible.third && (
          <div className="sidebar__nav-item nav-item">
            <div className="nav-item__top">
              <a className="nav-item__number" href="#11-50">
                11-50
              </a>

              <h4 className="nav-item__title">
                SEPARABILITY
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
