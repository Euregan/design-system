import * as styles from './DemoSite.css'

const DemoSite = () => (
  <div className={styles.page}>
    <nav className={styles.menu}>
      <div className={styles.tint}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 247 246"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M178.954 66.72V9.548c0-5.273-4.267-9.548-9.53-9.548H68.271C30.57 0 0 30.625 0 68.395v96.006c0 8.215 6.652 14.879 14.852 14.879h53.194l16.262-97.324 94.646-15.236z"
            fill="#042D87"
          ></path>
          <path
            d="M178.954 66.72l-33.957 91.235-76.951 21.325v56.589c0 5.594 4.529 10.131 10.112 10.131h100.571C216.438 246 247 215.375 247 177.605V80.551c0-7.64-6.179-13.83-13.805-13.83h-54.241z"
            fill="#06CDEF"
          ></path>
          <path
            d="M178.954 66.72H79.27c-6.2 0-11.224 5.033-11.224 11.245V179.28h99.684c6.201 0 11.224-5.033 11.224-11.245V66.72z"
            fill="#0D54D1"
          ></path>
        </svg>
        <svg
          width="2em"
          height="1em"
          viewBox="147 0 193 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M191.651 73.346l.618 15.533c-3.093 1.232-8.533 2.22-13.355 2.22-14.342 0-21.763-6.78-21.763-20.093V48.325h-9.768V33.038h9.892V19.972l15.581-9.122h4.574v22.186h14.466V48.32H177.43v17.75c0 6.04 2.102 8.012 7.542 8.012 1.854 0 3.586-.492 5.564-1.232l1.112.492.003.003zM198.575 10.723C198.575 4.436 203.521 0 210.57 0c7.048 0 11.994 4.439 11.994 10.847 0 6.408-4.946 10.726-11.994 10.726-7.049 0-11.995-4.44-11.995-10.847v-.003zm1.73 78.03V33.035h20.403v55.716h-20.403zM231.997 33.036h19.906v8.75c4.946-7.394 11.252-11.094 19.164-11.094 12.24 0 19.782 7.89 19.782 22.066v35.994h-20.403V59.045c0-8.383-2.596-11.343-7.915-11.343-5.933 0-10.137 5.3-10.137 14.054v26.996h-20.403V33.036h.006zM339.382 73.346L340 88.879c-3.093 1.232-8.533 2.22-13.355 2.22-14.342 0-21.763-6.78-21.763-20.093V48.325h-9.768V33.038h9.892V19.972l15.581-9.122h4.574v22.186h14.466V48.32h-14.466v17.75c0 6.04 2.102 8.012 7.542 8.012 1.854 0 3.587-.492 5.564-1.232l1.112.492.003.003z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className={styles.menuItem}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className={styles.menuItemIcon}
        >
          <path d="M2.75 0a2.25 2.25 0 012.248 2.25v13.5a2.25 2.25 0 11-4.498 0V2.25A2.25 2.25 0 012.75 0zm6.5 4a2.25 2.25 0 012.248 2.25v9.5a2.25 2.25 0 11-4.498 0v-9.5A2.25 2.25 0 019.25 4zm6.5 4a2.25 2.25 0 012.248 2.25v5.5a2.25 2.25 0 11-4.498 0v-5.5A2.25 2.25 0 0115.75 8z"></path>
        </svg>
        Dashboard
      </div>
      <div className={styles.activeMenuItem}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className={styles.menuItemIcon}
        >
          <path
            d="M2.667 10h4.666v1.334H2.667V10zm0-2.666h6.666v1.333H2.667V7.334zm0-2.667h6.666V6H2.667V4.667zm8-2.667H7.88A2.007 2.007 0 006 .667c-.867 0-1.6.56-1.88 1.333H1.333a1.339 1.339 0 00-1.227.82A1.284 1.284 0 000 3.334v9.333c0 .18.04.36.107.52a1.338 1.338 0 00.96.793c.086.014.173.02.266.02h9.334C11.4 14 12 13.4 12 12.667V3.334C12 2.6 11.4 2 10.667 2zM6 1.834c.273 0 .5.226.5.5 0 .273-.227.5-.5.5a.504.504 0 01-.5-.5c0-.274.227-.5.5-.5zm4.667 10.833H1.333V3.334h9.334v9.333z"
            fill="currentColor"
          ></path>
        </svg>
        Contracts
      </div>
      <div className={styles.menuItem}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className={styles.menuItemIcon}
        >
          <path d="M12 2v6a2 2 0 002 2h6v10.5a1.5 1.5 0 01-1.5 1.5H14v-5.25A2.75 2.75 0 0011.25 14v-1a1.5 1.5 0 00-1.5-1.5H4.5c-.175 0-.344.03-.5.085V3.5A1.5 1.5 0 015.5 2H12z"></path>
          <path d="M13.5 2.5V8a.5.5 0 00.5.5h5.5l-6-6zM3.75 13.25a.75.75 0 01.75-.75h5a.75.75 0 01.75.75V15h.5A2.25 2.25 0 0113 17.25v3.5A2.25 2.25 0 0110.75 23h-7.5A2.25 2.25 0 011 20.75v-3.5A2.25 2.25 0 013.25 15h.5v-1.75zm5 .75h-3.5v1h3.5v-1zm-5.5 2.5a.75.75 0 00-.75.75v3.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75h-7.5z"></path>
        </svg>
        Cases
      </div>
      <div className={styles.menuItem}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className={styles.menuItemIcon}
        >
          <path
            d="M18.31 12.016l-1.663-.961a7.523 7.523 0 000-2.742l1.664-.961a.472.472 0 00.215-.547 9.728 9.728 0 00-2.137-3.696.47.47 0 00-.578-.09l-1.664.962a7.372 7.372 0 00-2.375-1.372V.691a.468.468 0 00-.367-.457 9.82 9.82 0 00-4.266 0 .468.468 0 00-.367.457v1.922a7.605 7.605 0 00-2.375 1.371l-1.66-.96a.464.464 0 00-.579.09A9.67 9.67 0 00.022 6.808a.467.467 0 00.215.546l1.664.961a7.524 7.524 0 000 2.743l-1.664.96a.472.472 0 00-.215.547 9.729 9.729 0 002.136 3.696c.149.16.391.199.579.09L4.4 15.39a7.374 7.374 0 002.375 1.37v1.923c0 .218.152.41.367.457a9.821 9.821 0 004.265 0 .468.468 0 00.368-.457v-1.922a7.606 7.606 0 002.375-1.371l1.664.96c.191.11.43.075.578-.09a9.67 9.67 0 002.136-3.695.482.482 0 00-.218-.55zm-9.038.793a3.13 3.13 0 01-3.125-3.125 3.13 3.13 0 013.125-3.125 3.13 3.13 0 013.125 3.125 3.13 3.13 0 01-3.125 3.125z"
            fill="currentColor"
          ></path>
        </svg>
        Settings
      </div>
      <div className={styles.collapse}>
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H2V12H0V0Z" fill="currentColor"></path>
          <path
            d="M12.41 10.59L7.82 6L12.41 1.41L11 0L5 6L11 12L12.41 10.59Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </nav>
    <section className={styles.main}>
      <div className={styles.topbar}>
        <div className={styles.organization}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 247 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className={styles.organizationIcon}
          >
            <path
              d="M178.954 66.72V9.548c0-5.273-4.267-9.548-9.53-9.548H68.271C30.57 0 0 30.625 0 68.395v96.006c0 8.215 6.652 14.879 14.852 14.879h53.194l16.262-97.324 94.646-15.236z"
              fill="#042D87"
            ></path>
            <path
              d="M178.954 66.72l-33.957 91.235-76.951 21.325v56.589c0 5.594 4.529 10.131 10.112 10.131h100.571C216.438 246 247 215.375 247 177.605V80.551c0-7.64-6.179-13.83-13.805-13.83h-54.241z"
              fill="#06CDEF"
            ></path>
            <path
              d="M178.954 66.72H79.27c-6.2 0-11.224 5.033-11.224 11.245V179.28h99.684c6.201 0 11.224-5.033 11.224-11.245V66.72z"
              fill="#0D54D1"
            ></path>
          </svg>
          <span>Tint.ai (demo)</span>
        </div>
        <div className={styles.product}>
          Demo Product
          <svg
            viewBox="0 0 8 12"
            width="1em"
            height="1em"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.productIcon}
          >
            <path d="M6.84515 1.27246C7.2435 1.67082 7.2435 2.31669 6.84515 2.71505L3.14618 6.41401L6.84515 10.113C7.2435 10.5113 7.2435 11.1572 6.84515 11.5556C6.44679 11.9539 5.80092 11.9539 5.40256 11.5556L0.982301 7.13531C0.583943 6.73695 0.583943 6.09108 0.982301 5.69272L5.40256 1.27246C5.80092 0.874104 6.44679 0.874104 6.84515 1.27246Z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Contracts</h1>
        <div className={styles.filters}>
          <div className={styles.input}>
            Status
            <svg
              viewBox="0 0 8 12"
              width="1em"
              height="1em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.statusChevron}
            >
              <path d="M6.84515 1.27246C7.2435 1.67082 7.2435 2.31669 6.84515 2.71505L3.14618 6.41401L6.84515 10.113C7.2435 10.5113 7.2435 11.1572 6.84515 11.5556C6.44679 11.9539 5.80092 11.9539 5.40256 11.5556L0.982301 7.13531C0.583943 6.73695 0.583943 6.09108 0.982301 5.69272L5.40256 1.27246C5.80092 0.874104 6.44679 0.874104 6.84515 1.27246Z"></path>
            </svg>
          </div>
          <div className={styles.input}>
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className={styles.inputIcon}
            >
              <path
                fill="currentColor"
                d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
              ></path>
            </svg>
            Coverage date from
          </div>
          <div className={styles.input}>
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className={styles.inputIcon}
            >
              <path
                fill="currentColor"
                d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
              ></path>
            </svg>
            Coverage date to
          </div>
          <div className={styles.input}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              className={styles.searchIcon}
            >
              <path
                d="M13.836 15c-.31 0-.6-.12-.815-.34l-4.065-4.09a5.76 5.76 0 01-3.186.97A5.775 5.775 0 010 5.77C0 2.59 2.585 0 5.77 0c3.186 0 5.77 2.59 5.77 5.77 0 1.14-.332 2.22-.954 3.17l4.076 4.1c.45.45.45 1.18 0 1.63-.225.21-.515.33-.826.33zM5.77 2.31a3.465 3.465 0 00-3.464 3.46 3.465 3.465 0 006.929 0c0-1.91-1.555-3.46-3.465-3.46z"
                fill="currentColor"
              ></path>
            </svg>
            Contract ID, person, asset, location...
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <th className={styles.tableHeadCell}>Status</th>
            <th className={styles.tableHeadCell}>Contract ID</th>
            <th className={styles.tableHeadCell}>Issued Date</th>
            <th className={styles.tableHeadCell}>Coverage Dates</th>
            <th className={styles.tableHeadCell}>Renter</th>
            <th className={styles.tableHeadCell}>Location</th>
            <th className={styles.tableHeadCell}>Vehicle</th>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <td className={styles.tableCell}>
                <div className={styles.chip.gray}>DRAFT</div>
              </td>
              <td className={styles.tableCell}>N/A</td>
              <td className={styles.tableCell}>6/27/2021</td>
              <td className={styles.tableCell}>
                <div className={styles.nowrap}>8/11/2021 → 1/26/2022</div>
                <div className={styles.details}>(168 days)</div>
              </td>
              <td className={styles.tableCell}>Trevion Klocko</td>
              <td className={styles.tableCell}>Lake Wilhelmland, KS, US</td>
              <td className={styles.tableCell}>Apex Nano boler 2016</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableCell}>
                <div className={styles.chip.green}>ISSUED</div>
              </td>
              <td className={styles.tableCell}>N/A</td>
              <td className={styles.tableCell}>5/2/2021</td>
              <td className={styles.tableCell}>
                <div className={styles.nowrap}>5/15/2021 → 12/17/2021</div>
                <div className={styles.details}>(216 days)</div>
              </td>
              <td className={styles.tableCell}>Izaiah Ondricka</td>
              <td className={styles.tableCell}>South Earnestine, GA, BV</td>
              <td className={styles.tableCell}>Keystone Airflyte 2002</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableCell}>
                <div className={styles.chip.gray}>DRAFT</div>
              </td>
              <td className={styles.tableCell}>N/A</td>
              <td className={styles.tableCell}>7/24/2021</td>
              <td className={styles.tableCell}>
                <div className={styles.nowrap}>10/2/2021 → 3/21/2022</div>
                <div className={styles.details}>(171 days)</div>
              </td>
              <td className={styles.tableCell}>Nichole Stehr</td>
              <td className={styles.tableCell}>West Jacyntheland, TN, US</td>
              <td className={styles.tableCell}>Starcraft Greyhawk 1995</td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableCell}>
                <div className={styles.chip.gray}>DRAFT</div>
              </td>
              <td className={styles.tableCell}>N/A</td>
              <td className={styles.tableCell}>7/14/2021</td>
              <td className={styles.tableCell}>
                <div className={styles.nowrap}>10/16/2021 → 1/9/2022</div>
                <div className={styles.details}>(85 days)</div>
              </td>
              <td className={styles.tableCell}>Melvina Reichel</td>
              <td className={styles.tableCell}>Heaneyport, OH, US</td>
              <td className={styles.tableCell}>Skyline Flight SLX Baja 1951</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
)

export default DemoSite
