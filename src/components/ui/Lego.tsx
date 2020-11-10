import React from 'react';
import styled from 'styled-components';

const Lego: React.FC = () => {
  return (
    // <LegoImg
    //   src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PGc+PHBhdGggZD0ibTQ5NyA0NTFoLTQ4MmMtOC4yODQgMC0xNS02LjcxNi0xNS0xNXYtMTY1aDQ5N2M4LjI4NCAwIDE1IDYuNzE2IDE1IDE1djE1MGMwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIvPjwvZz48L2c+PHBhdGggZD0ibTE1MCA5MXYtMTVjMC04LjI4NC02LjcxNi0xNS0xNS0xNWgtNjBjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTV6Ii8+PHBhdGggZD0ibTI3MCA5MXYtMTVjMC04LjI4NC02LjcxNi0xNS0xNS0xNWgtNjBjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2MTV6Ii8+PHBhdGggZD0ibTQ1MiAyNDF2LTE1YzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTYwYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djE1eiIvPjxwYXRoIGQ9Im0zMzAgMjQxdi0xMDVjMC04LjI4NC02LjcxNi0xNS0xNS0xNWgtMzAwYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djEwNXoiLz48L2c+PC9zdmc+"
    //   alt="lego"
    // />
    <LegoSVG
      height="512"
      width="512"
      viewBox="0 0 60 54"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="028---Lego" fill="rgb(0,0,0)" fillRule="nonzero">
          <path
            id="Shape"
            d="m57 6h-1v-3c0-1.65685425-1.3431458-3-3-3h-4c-1.6568542 0-3 1.34314575-3 3v3h-3v-3c0-1.65685425-1.3431458-3-3-3h-4c-1.6568542 0-3 1.34314575-3 3v3h-1c-1.6568542 0-3 1.34314575-3 3v19c.0033144.3414397.0655622.679743.184 1h-2.184v-3c0-1.6568542-1.3431458-3-3-3h-4c-1.6568542 0-3 1.3431458-3 3v3h-3v-3c0-1.6568542-1.3431458-3-3-3h-4c-1.65685425 0-3 1.3431458-3 3v3h-1c-1.65685425 0-3 1.3431458-3 3v19c0 1.6568542 1.34314575 3 3 3h54c1.6568542 0 3-1.3431458 3-3v-19c-.0026037-.740399-.2806479-1.4533329-.78-2 .4993521-.5466671.7773963-1.259601.78-2v-19c0-1.65685425-1.3431458-3-3-3zm-9-3c0-.55228475.4477153-1 1-1h4c.5522847 0 1 .44771525 1 1v3h-6zm-13 0c0-.55228475.4477153-1 1-1h4c.5522847 0 1 .44771525 1 1v3h-6zm-4 25v-19c0-.55228475.4477153-1 1-1h25c.5522847 0 1 .44771525 1 1v19c0 .5522847-.4477153 1-1 1h-25c-.5522847 0-1-.4477153-1-1zm-12-2c0-.5522847.4477153-1 1-1h4c.5522847 0 1 .4477153 1 1v3h-6zm-13 0c0-.5522847.44771525-1 1-1h4c.5522847 0 1 .4477153 1 1v3h-6zm52 25c0 .5522847-.4477153 1-1 1h-54c-.55228475 0-1-.4477153-1-1v-19c0-.5522847.44771525-1 1-1h54c.5522847 0 1 .4477153 1 1z"
          />
          <path
            id="Shape"
            d="m55 10c-.5522847 0-1 .4477153-1 1v3c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3c0-.5522847-.4477153-1-1-1z"
          />
          <path
            id="Shape"
            d="m55 17c-.5522847 0-1 .4477153-1 1v8c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-8c0-.5522847-.4477153-1-1-1z"
          />
          <path
            id="Shape"
            d="m8 33h-3c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"
          />
          <path
            id="Shape"
            d="m30 33h-18c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h18c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
          />
        </g>
      </g>
    </LegoSVG>
  );
};

const LegoImg = styled.img`
  color: red;
`;

const LegoSVG = styled.svg``;

export default Lego;
