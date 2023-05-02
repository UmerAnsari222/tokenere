import React from "react";

const BottomBar = () => {
  return (
    <div className="navbar-container">
      <ul className="list">
        <li>
          <a href="#">
            <div className="icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.248 18.1418C16.0543 18.1418 17.5185 16.6775 17.5185 14.8713C17.5185 13.0651 16.0543 11.6008 14.248 11.6008C12.4418 11.6008 10.9776 13.0651 10.9776 14.8713C10.9776 16.6775 12.4418 18.1418 14.248 18.1418Z"
                  stroke="#78847B"
                  strokeWidth="1.664"
                  strokeMiterlimit="10"
                />
                <path
                  d="M23.2868 18.6099C23.2868 19.6023 22.8932 20.5541 22.1922 21.2566C21.4913 21.9591 20.5403 22.3548 19.548 22.357H8.94767C7.9553 22.3548 7.00433 21.9591 6.30339 21.2566C5.60245 20.5541 5.2088 19.6023 5.2088 18.6099V14.2383C5.21122 13.247 5.60383 12.2964 6.3017 11.5923L11.6018 6.3004C11.9491 5.95256 12.3616 5.67661 12.8156 5.48832C13.2696 5.30004 13.7563 5.20312 14.2478 5.20312C14.7393 5.20313 15.226 5.30004 15.68 5.48832C16.1341 5.67661 16.5465 5.95256 16.8938 6.3004L22.1939 11.5923C22.8918 12.2964 23.2844 13.247 23.2868 14.2383V18.6099Z"
                  stroke="#78847B"
                  strokeWidth="1.664"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className="text">Home</div>
          </a>
        </li>

        <li>
          <a href="#">
            <div className="icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0698 20.5C4.54682 20.5 0.0698242 16.023 0.0698242 10.5C0.0698242 4.977 4.54682 0.5 10.0698 0.5C15.5928 0.5 20.0698 4.977 20.0698 10.5C20.0698 16.023 15.5928 20.5 10.0698 20.5ZM10.0698 18.5C12.1916 18.5 14.2264 17.6571 15.7267 16.1569C17.227 14.6566 18.0698 12.6217 18.0698 10.5C18.0698 8.37827 17.227 6.34344 15.7267 4.84315C14.2264 3.34285 12.1916 2.5 10.0698 2.5C7.94809 2.5 5.91326 3.34285 4.41297 4.84315C2.91268 6.34344 2.06982 8.37827 2.06982 10.5C2.06982 12.6217 2.91268 14.6566 4.41297 16.1569C5.91326 17.6571 7.94809 18.5 10.0698 18.5ZM5.06982 7.5L8.06982 4L11.0698 7.5H9.06982V11.5H7.06982V7.5H5.06982ZM15.0698 13.5L12.0698 17L9.06982 13.5H11.0698V9.5H13.0698V13.5H15.0698Z"
                  fill="#78847B"
                />
              </svg>
            </div>
            <div className="text">Swap</div>
          </a>
        </li>

        <div className="indicator">
          <div className="corners"></div>
        </div>

        <li style={{ marginTop: "-80px" }}>
          <a href="#">
            <svg
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="29.5547" cy="29.3729" r="28.8427" fill="#F5C249" />
              <path
                d="M31.4035 31.2218V42.3151H27.7058V31.2218H16.6124V27.524H27.7058V16.4307H31.4035V27.524H42.4969V31.2218H31.4035Z"
                fill="white"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href="#">
            <div className="icon">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.70012 1L1.00012 4.6V17.2C1.00012 17.6774 1.18976 18.1352 1.52733 18.4728C1.8649 18.8104 2.32273 19 2.80012 19H15.4001C15.8775 19 16.3354 18.8104 16.6729 18.4728C17.0105 18.1352 17.2001 17.6774 17.2001 17.2V4.6L14.5001 1H3.70012Z"
                  stroke="#78847B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 4.6001H17.2"
                  stroke="#78847B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.7002 8.2002C12.7002 9.15497 12.3209 10.0706 11.6458 10.7458C10.9706 11.4209 10.055 11.8002 9.10018 11.8002C8.1454 11.8002 7.22973 11.4209 6.5546 10.7458C5.87947 10.0706 5.50018 9.15497 5.50018 8.2002"
                  stroke="#78847B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text">Transaction</div>
          </a>
        </li>

        <li>
          <a href="#">
            <div className="icon">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9449 7.78327V6.2973L10 3.2525L9.31918 3.55101V17.4489L10 17.7474L10.6809 17.4489V11.2578H12.4999V9.88472H10.6809V5.04897L13.9242 6.46472V16.0269L15.2859 15.4299V7.05911L16.9449 7.78327ZM18.364 15.6064V15.6151L10 19.2821L1.63608 15.6151V15.6065L1.59649 15.5891V5.41088L1.63608 5.39352V5.38474L10 1.71777L18.364 5.38474V5.39356L18.4035 5.41088V15.5891L18.364 15.6064ZM4.58422 5.62693L6.51134 11.8236V4.78203L7.87303 4.18504V16.8148L6.51134 16.2178V16.1534L6.44003 16.175L4.41766 9.67214V15.2999L3.05597 14.7029V6.29695L4.58422 5.62693ZM20 16.6158V4.38425L10 0L0 4.38425V16.6158L10 21L20 16.6158Z"
                  fill="#78847B"
                />
              </svg>
            </div>
            <div className="text">Setting</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;