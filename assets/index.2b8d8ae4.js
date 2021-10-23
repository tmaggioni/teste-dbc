var T=Object.defineProperty,R=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var H=(t,a,l)=>a in t?T(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,h=(t,a)=>{for(var l in a||(a={}))z.call(a,l)&&H(t,l,a[l]);if(S)for(var l of S(a))U.call(a,l)&&H(t,l,a[l]);return t},p=(t,a)=>R(t,Q(a));import{W as $,s as u,j as r,a as e,m as N,F as j,I as W,S as q,d as J,M as L,T as k,L as K,A as X,D as Y,r as v,b as G,P as e1,c as t1,e as a1,f as I,g as d,h as n1,B as i1,i as l1,k as r1,l as o1,n as c1,R as d1,o as s1}from"./vendor.f6623d99.js";const C1=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const C of c.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&s(C)}).observe(document,{childList:!0,subtree:!0});function l(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=l(i);fetch(i.href,c)}};C1();const h1=$`
 /* html{
    --exo: 'Exo 2'
    --nunito: 'Nunito';
  } */
  html{
      --exo:'Exo 2';
      --nunito:'Nunito';
      --green: #3FA110;
    }
  *{
    
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: var(--exo);
  }
 
  body {
    background:#E5E5E5;
  }
  .container{
    width:100%;
    max-width:1072px;
    padding:0 10px;
    margin:0 auto;
  }
`,g1=u.nav`
    width:100%;
    height:64px;
    background:#FFF;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    margin-bottom:31px;
    .container{
        height:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .nav-left{
        display:flex;
        align-items:center;
        svg{
            &:first-of-type{
                fill:#3fa110;
                margin-right:20px;
            }
        }
    }
    .nav-right{
        display:flex;
        align-items:center;
        font-family: var(--nunito);
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color:var(--green);
        svg {
            margin-left:14px;
        }
    }
   

`;function p1(t){return r("svg",{width:"91",height:"48",viewBox:"0 0 91 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M40.7495 21.9822H37.2825L36.8139 25.3304H35.3687L36.5648 16.7143H41.8308L41.6539 17.9695H37.833L37.4594 20.7142H40.9264L40.7495 21.9822Z",fill:"#64C800"}),e("path",{d:"M47.6043 19.5606L47.0371 23.7264C46.9474 24.4403 46.9826 24.6106 47.537 24.5615L47.4345 25.4195C46.6974 25.5407 45.6559 25.711 45.845 24.4501C45.3322 25.2263 44.4638 25.4916 43.6594 25.4916C42.0731 25.4916 41.695 24.3879 41.8712 22.9371L42.3199 19.5573H43.6338L43.1723 22.9371C43.0409 23.8705 43.4479 24.4403 44.2074 24.4403C45.0118 24.4403 45.7392 23.8344 45.8578 22.9011L46.3129 19.5606H47.6043Z",fill:"#64C800"}),e("path",{d:"M49.0024 19.5778C49.9652 19.3519 50.8408 19.5778 50.7245 20.5329C51.1833 19.8037 52.0299 19.4713 52.8441 19.4713C54.4209 19.4713 54.9992 20.4974 54.786 21.9301L54.4984 23.9823C54.437 24.4115 54.5436 24.5664 55.0994 24.5083L54.9831 25.3311C53.8425 25.557 53.0283 25.4021 53.2124 24.0307L53.4871 21.9785C53.6099 21.0718 53.0897 20.5232 52.3142 20.5232C51.5032 20.5232 50.7924 21.0718 50.6599 22.014L50.1979 25.357H48.8958L49.4418 21.359C49.5387 20.5942 49.6163 20.3555 48.9054 20.4168L49.0024 19.5778Z",fill:"#64C800"}),e("path",{d:"M62.5957 16.6279L61.5726 23.9478C61.527 24.2932 61.7062 24.4481 62.1265 24.4126L62.0027 25.2969C61.1457 25.4518 60.3214 25.355 60.4419 24.4029L60.4712 24.1641C60.0379 24.9645 59.1712 25.4163 58.3012 25.4163C56.5417 25.4163 55.8574 24.0188 56.092 22.3857C56.2973 20.8107 57.3563 19.368 59.0799 19.368C59.9467 19.368 60.5625 19.6778 60.859 20.2523L61.3705 16.6311H62.5957V16.6279ZM57.3172 22.5148C57.1738 23.6251 57.744 24.1608 58.4348 24.1963C59.4416 24.2544 60.2464 23.4443 60.4582 22.4535C60.6733 21.4982 60.3898 20.4492 59.2428 20.4492C58.0633 20.4492 57.4345 21.5014 57.3172 22.5148Z",fill:"#64C800"}),e("path",{d:"M68.7167 23.6155C68.6618 24.1406 68.5811 24.4853 69.2304 24.4145L69.1076 25.2972C68.2612 25.4519 67.4407 25.3552 67.557 24.4048L67.5861 24.1664C67.1564 24.9654 66.2971 25.4165 65.4346 25.4165C63.6675 25.4165 63.0117 24.0214 63.2443 22.3912C63.5415 20.4838 64.9661 19.4367 66.856 19.4722C67.6798 19.4722 68.5068 19.6752 69.2013 20.007L68.7167 23.6155ZM67.8542 20.7577C67.4698 20.5805 67.0466 20.5193 66.6783 20.5193C65.5799 20.5193 64.7562 21.1508 64.5494 22.3879C64.4008 23.4382 64.6431 24.2598 65.6962 24.2598C66.6622 24.2598 67.4439 23.5091 67.6248 22.4492L67.8542 20.7577Z",fill:"#64C800"}),e("path",{d:"M72.7312 25.4594C71.5286 25.3615 70.473 24.5287 70.3619 23.0461C70.1821 20.6557 72.1266 19.3853 73.8783 19.3853C75.1234 19.3853 76.2411 20.0972 76.3816 21.4851H75.1855C75.0744 20.8091 74.3554 20.5544 73.7377 20.5544C72.6756 20.5544 71.6593 21.3382 71.6723 22.824C71.6887 23.8266 72.3554 24.3328 73.2018 24.3328C73.8423 24.3328 74.5776 23.9932 74.9208 23.2714H76.2378C75.8554 24.6104 74.8064 25.2635 73.7312 25.4202L73.4992 26.0244C74.277 26.0832 74.5057 26.7004 74.2181 27.3633C73.7508 28.3528 72.2148 28.3528 71.4959 27.8107L71.6593 27.0988C71.973 27.4254 72.9894 27.5952 73.2051 27.0988C73.46 26.6155 72.7704 26.315 72.388 26.351L72.7312 25.4594Z",fill:"#64C800"}),e("path",{d:"M82.6744 23.6133C82.6195 24.1391 82.5387 24.4842 83.1883 24.4132L83.0655 25.2971C82.2187 25.4519 81.3977 25.3551 81.5173 24.4036L81.5464 24.1649C81.1165 24.9648 80.2567 25.4164 79.3937 25.4164C77.6257 25.4164 76.9695 24.0197 77.2023 22.3875C77.4996 20.4779 78.925 19.4296 80.8159 19.465C81.6401 19.465 82.4708 19.6683 83.1625 20.0005L82.6744 23.6133ZM81.8114 20.7521C81.4268 20.5747 81.0034 20.5134 80.6349 20.5134C79.5359 20.5134 78.7117 21.1456 78.5048 22.3843C78.3562 23.4359 78.5986 24.2584 79.6523 24.2584C80.6187 24.2584 81.4009 23.5068 81.5819 22.4456L81.8114 20.7521ZM78.9606 17.8393C79.523 16.8974 80.2599 16.5168 81.11 17.0297C81.5108 17.2813 81.9181 17.4587 82.2801 16.8748L82.8877 17.1845C82.4223 18.1264 81.6627 18.5102 80.8579 18.0199C80.4474 17.7941 79.9626 17.5683 79.565 18.1619C79.384 18.0554 79.1707 17.9361 78.9606 17.8393Z",fill:"#64C800"}),e("path",{d:"M86.9857 25.5019C85.676 25.4662 84.444 24.6979 84.3208 23.0932C84.1393 20.7072 85.9515 19.4364 87.8222 19.472C89.1546 19.5077 90.3768 20.276 90.5 21.8807C90.6783 24.257 88.8109 25.5375 86.9857 25.5019ZM87.6114 20.6099C86.6161 20.6099 85.6565 21.388 85.6371 22.876C85.6176 23.8939 86.3989 24.3737 87.164 24.3737C88.1463 24.3737 89.174 23.6767 89.1514 22.1077C89.1287 21.0443 88.4122 20.6099 87.6114 20.6099Z",fill:"#64C800"}),e("path",{d:"M88.9099 33.0772L89.3922 29.6417H85.4043L84.922 33.0772H88.9099ZM82.9216 47.3491H86.9062L88.6606 34.8467H84.676L82.9216 47.3491ZM32.2025 33.0772L32.6848 29.6417H28.697L28.2147 33.0772H32.2025ZM26.2143 47.3491H30.1989L31.9533 34.8467H27.9687L26.2143 47.3491ZM13.5191 34.2784C13.1825 36.8583 14.0888 38.3856 16.5424 39.3801L19.7858 40.6685C20.8151 41.043 21.0417 41.2367 20.909 42.2539C20.7083 43.5648 20.1969 43.9135 17.931 43.9135H12.4218L11.933 47.3459H18.0929C22.89 47.3459 24.5019 46.219 24.9875 42.5186C25.2885 40.1841 24.8839 38.5051 21.9351 37.3653L18.8697 36.1996C17.6818 35.7572 17.4617 35.5797 17.6203 34.5432C17.8016 33.3872 18.2288 33.1386 19.119 33.074H25.6931L26.1819 29.6384H20.3166C16.3223 29.6417 14.0565 30.3811 13.5191 34.2784ZM55.6312 34.8467H54.8576C53.3913 34.8467 51.9541 35.5732 50.1026 37.2587V34.8467H46.9337L45.1793 47.3491H49.193L50.1641 40.1583C50.6691 39.5157 52.0739 38.7602 53.1194 38.7602H53.974L54.0031 38.6245C54.0063 38.6084 54.3689 37.0004 55.4759 35.1115L55.6312 34.8467ZM62.0921 39.9258C63.2606 39.8322 63.8012 39.6061 63.9371 38.4986C63.9695 38.1144 63.9307 37.8787 63.8077 37.7463C63.6264 37.5493 63.1959 37.5073 62.5615 37.5073C62.4449 37.5073 62.3187 37.5073 62.186 37.5106C60.3086 37.5106 59.8457 38.1499 59.4799 40.1744L62.0921 39.9258ZM67.1935 35.8896C67.802 36.5903 68.0059 37.5719 67.8182 38.8925C67.4298 41.5532 65.5588 42.2151 62.665 42.4185L59.2274 42.6768C59.3213 44.1202 60.0755 44.3882 61.4933 44.3882C62.7168 44.3882 65.6656 44.2461 66.1479 44.1234L66.3422 44.075L66.3648 44.2752C66.4846 45.3181 66.8309 46.4741 66.8342 46.4838L66.8795 46.6323L66.7338 46.6936C65.1704 47.3491 62.7039 47.6462 61.0725 47.6462C58.7613 47.6462 57.172 47.1231 56.2139 46.0478C55.2363 44.95 54.8997 43.2419 55.1878 40.817C55.764 36.0931 57.5896 34.498 62.432 34.498C64.8241 34.5012 66.381 34.9565 67.1935 35.8896ZM40.0164 34.5012C37.7506 34.5012 36.1969 34.9694 35.1352 35.98C34.0832 36.9746 33.4617 38.4986 33.1218 40.9138C32.7787 43.3162 33.0733 45.0081 34.0152 46.0931C34.9248 47.1392 36.4655 47.6462 38.7314 47.6462C39.8449 47.6462 41.4795 47.5461 42.9523 47.0617L43.0559 47.0294L43.4702 44.075L43.2048 44.1202C42.1819 44.2655 40.8904 44.3397 39.3723 44.3397C38.3203 44.3397 37.7991 44.2106 37.5078 43.8812C37.1453 43.4712 37.0773 42.6768 37.2715 41.1334C37.6211 38.2726 38.5113 37.8108 40.5084 37.8108C41.3177 37.8108 44.3409 37.8625 44.3409 37.8625L44.7326 35.0598C44.7358 35.0566 43.0429 34.5012 40.0164 34.5012ZM76.0982 37.4137C73.8744 37.4137 73.3986 37.6946 72.9584 40.9365C72.7318 42.5993 72.6671 43.6326 72.9972 44.0104C73.1332 44.1654 73.3662 44.2332 73.7158 44.217C74.9297 44.1912 75.8975 43.5519 77.1437 42.454L77.8494 37.4137H76.0982ZM82.9863 29.6675L80.4745 47.3491H77.2797V45.373C75.6968 46.8809 74.0525 47.6462 72.3887 47.6462C71.2202 47.6462 70.3559 47.3104 69.7441 46.6161C68.8054 45.5474 68.5271 43.6584 68.9026 40.8396C69.6373 35.5603 71.6118 34.498 74.5639 34.498C75.7292 34.498 77.066 34.6013 78.2507 34.7789L78.9758 29.6675H82.9863Z",fill:"#64C800"}),e("path",{d:"M29.2518 14.4518C29.8534 14.0592 30.455 13.6568 31.0139 13.2187C31.1585 13.1051 31.3229 12.9786 31.4511 12.8715C31.9146 12.4724 32.3617 12.0602 32.7792 11.6157C32.9041 11.4826 33.0258 11.4339 33.1178 11.4696C33.2592 11.5248 33.3446 11.7714 33.2789 12.2257C33.1112 13.4037 32.5261 14.6433 31.8259 15.5941C31.8259 15.5908 31.8226 15.5876 31.8226 15.5843C31.8259 15.5876 31.8259 15.5908 31.8259 15.5941C30.8857 15.4545 29.9948 15.0521 29.2518 14.4518Z",fill:"#46D7FF"}),e("path",{d:"M32.8702 8.89692C33.3055 8.62288 33.7408 8.34562 34.1464 8.03611C34.2519 7.95551 34.3706 7.86847 34.4629 7.79432C34.7993 7.51705 35.1225 7.2269 35.4258 6.91417C35.5182 6.82067 35.6039 6.78843 35.6698 6.81423C35.7721 6.85291 35.8314 7.03346 35.782 7.35263C35.6534 8.18764 35.2247 9.06456 34.7136 9.73515C34.7136 9.73193 34.7136 9.73193 34.7136 9.73193V9.73515C34.0375 9.62876 33.3978 9.33538 32.8702 8.89692Z",fill:"#FFCD00"}),e("path",{d:"M22.4451 21.5939C23.4971 21.1141 24.5492 20.6214 25.5433 20.0584C25.8007 19.9113 26.0935 19.7513 26.3219 19.6138C27.1584 19.0923 27.9659 18.5453 28.7413 17.9343C28.9729 17.752 29.1756 17.7072 29.3139 17.784C29.5263 17.9055 29.5939 18.3214 29.3783 19.0284C28.8153 20.8614 27.5766 22.6975 26.2254 24.0379C26.2254 24.0315 26.2254 24.0283 26.2254 24.0283C26.2254 24.0283 26.2254 24.0347 26.2254 24.0379C24.7712 23.5932 23.4618 22.7359 22.4451 21.5939Z",fill:"#FFCD00"}),e("path",{d:"M10.5548 19.873C12.319 19.7144 14.0896 19.5332 15.8149 19.2193C16.2616 19.1383 16.7665 19.051 17.1647 18.9668C18.6375 18.6335 20.078 18.2484 21.5022 17.7532C21.9263 17.6044 22.2467 17.6432 22.4086 17.8309C22.6546 18.1157 22.5542 18.7629 21.8907 19.6917C20.1718 22.093 17.469 24.1448 14.847 25.4166C14.8503 25.4069 14.8503 25.4005 14.8503 25.4005C14.8503 25.4005 14.847 25.4102 14.847 25.4166C12.9566 24.0056 11.4741 22.0736 10.5548 19.873Z",fill:"#64C800"}),e("path",{d:"M16.7647 12.1566C14.4895 11.5808 12.282 10.8498 10.0876 10.0282C9.49935 9.80177 8.76893 9.48154 8.11931 9.20983C5.61133 8.14562 3.35543 7.062 0.931477 5.77136C0.252769 9.16454 1.42273 13.5928 2.69935 16.4005C6.96874 16.7887 11.7003 16.3973 15.5851 14.9546C17.2495 14.3336 17.9444 13.5961 17.8733 13.0203C17.8248 12.6451 17.4435 12.3281 16.7647 12.1566Z",fill:"#46D7FF"}),e("path",{d:"M19.3717 7.54859C18.2721 6.61577 17.2532 5.61517 16.2635 4.5597C15.9983 4.27243 15.6813 3.89801 15.3967 3.56556C14.297 2.2906 13.7083 1.3836 12.7121 -0.00109863C11.4604 1.78707 10.5839 4.34667 10.5548 6.30913C12.7962 7.6551 15.4905 8.67507 17.9971 8.85905C19.0709 8.93652 19.6434 8.69444 19.7534 8.33938C19.8278 8.10699 19.7017 7.82617 19.3717 7.54859Z",fill:"#FFCD00"}),e("path",{d:"M21.4968 10.8542C22.6709 10.8929 23.8482 10.9218 25.0093 10.8574C25.3085 10.8413 25.65 10.8252 25.9167 10.8027C26.9119 10.7061 27.8908 10.5708 28.8665 10.3647C29.1559 10.3035 29.3641 10.3518 29.4552 10.487C29.595 10.6932 29.4779 11.1086 28.9706 11.6594C27.6534 13.0862 25.715 14.2037 23.8905 14.8189C23.8905 14.8125 23.8937 14.806 23.897 14.8028C23.8937 14.8092 23.8937 14.8125 23.8905 14.8189C22.7554 13.7464 21.9294 12.3647 21.4968 10.8542Z",fill:"#64C800"})]})}function u1(t){return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:e("path",{d:"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"})})}function v1(t){return e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6744 4.49899C14.6744 6.98437 12.6598 8.99908 10.1744 8.99908C7.68911 8.99908 5.67444 6.98437 5.67444 4.49899C5.67444 2.01362 7.68911 -0.00109863 10.1744 -0.00109863C12.6598 -0.00109863 14.6744 2.01362 14.6744 4.49899ZM13.6563 4.49899C13.6563 2.57591 12.0975 1.01702 10.1744 1.01702C8.25136 1.01702 6.6925 2.57591 6.6925 4.49899C6.6925 6.42207 8.25136 7.98096 10.1744 7.98096C12.0975 7.98096 13.6563 6.42207 13.6563 4.49899ZM10.1739 11.0169C5.49043 11.0169 1.6937 14.8102 1.6937 19.4898C1.6937 19.771 1.46553 19.9989 1.18407 19.9989C0.902607 19.9989 0.674438 19.771 0.674438 19.4898C0.674438 14.2479 4.92749 9.9987 10.1739 9.9987C15.4205 9.9987 19.6744 14.248 19.6744 19.4898C19.6744 19.771 19.4463 19.9989 19.1648 19.9989C18.8833 19.9989 18.6552 19.771 18.6552 19.4898C18.6552 14.8104 14.8576 11.0169 10.1739 11.0169Z",fill:"#3FA110"})})}const m1=()=>e(g1,{children:r("div",{className:"container",children:[r("div",{className:"nav-left",children:[e(u1,{}),e(p1,{})]}),r("div",{className:"nav-right",children:["Ol\xE1, Pedro ",e(v1,{})]})]})}),f1=u.h1`
    font-family: var(--exo);
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 24px;
    color:#505050;
`,x1=({children:t})=>e(f1,{children:t});var b1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABT0lEQVQ4y5WTPUvDUBSG33ObaukiSQelOPQXOLiLaQfp4iJIh2oibhlcdREcVToIOhUX00JFF8FVS1P/hUsnEURt6get1uYeFwOtWJs80+Vy3gfuebmEH9IlbVqyLAgSVs1othAQ4R9qRvOOQAXJ8ky31ZmgAvp9kS5pmmRZJNCFY7qV0AIAWKhMic+vj20AqiKUrerqUzeUwEe31SyDLSJhOUbzPrQAAPSSmmLmIwIVHNO9CS0AgEw5EfOkdwDgdiKuHV4uN2Qogc+8ra4DPCcoslEznt+BvhqDQEAbQLw/pwQJZk+TotNt7zA4NqaM56/yD73AT8iUE3FPekWAqnXTPQm1RL2kJZnlMYH2/2rgX4Fuq7MM3iUiyzHcxrA5ZUh4icF5QSI36mMNCBbPU+K109pk8GQ0Es1drzz2MIIBwVvnZQ2gVt1090YFfb4By5d31wyBWPIAAAAASUVORK5CYII=";const A1=u.div`
   display:flex;
   align-items:center;
   margin-top:20px;
   a{
    font-family: var(--exo);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    text-decoration:none;
    color: var(--green);
    margin-right:30px;
    position:relative;
    &:after{
        content:"";
        background: url(${b1});
        width:16px;
        height:16px;
        position:absolute;
        right:-23px;
        top:50%;
        transform:translateY(-50%);
    }
   }
   span{
    font-family:var(--exo);
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #828A82;
   }
`,L1=({children:t})=>e(A1,{children:t}),y1=u.div`
    .filters{
        display:flex;
        flex-direction:column;
        margin-top:33px;
        .row{
            width:100%;
            display:flex;
            justify-content:flex-start;
            margin-bottom:20px;
            @media(max-width:1024px){
                flex-direction: column;
                align-items: center;
                margin-bottom:0px;
            }
            .item{
                margin-right:10px;
                width:100%;
                display:flex;
                align-items:flex-end;
                @media(max-width:1024px){
                    margin-bottom:10px;
                    justify-content:center;
                }
            }
        }
    }
    .table-committees{
        width:100%;
        margin-top:50px;
        table{
            thead{
                th{
                    padding:10px;
                    
                }
            }
        }
    }
`,w1=N({select:{"& .MuiSvgIcon-root":{color:"var(--green)"}}}),x=({label:t,value:a,options:l,onChangeCallback:s,variant:i})=>{const c=w1();return r(j,{fullWidth:!0,variant:i,children:[e(W,{children:t}),e(q,{label:t,value:a,className:c.select,IconComponent:J,onChange:C=>{s(C.target.value)},children:l.map((C,w)=>e(L,{value:C.value,children:C.label},w))})]})},M1=({type:t,label:a,value:l,onChangeCallback:s})=>e(k,{fullWidth:!0,type:t,label:a,value:l,variant:"standard",onChange:i=>{s(i.target.value)}}),E1=u.div`
  width:100%;
   svg{
       fill:var(--green);
   }
`,_=({label:t,value:a,onChangeCallback:l})=>e(E1,{children:e(K,{dateAdapter:X,children:e(Y,{label:t,value:a,onChange:s=>{l(s)},inputFormat:"dd/MM/yyyy",renderInput:s=>e(k,h({fullWidth:!0,variant:"standard"},s))})})}),F1=u.button`
    display:flex;
    align-items:center;
    padding:5px 10px;
    border-radius:10px;
    background:${t=>{var a;return(a=t.bgColor)!=null?a:"transparent"}};
    color:${t=>{var a;return(a=t.color)!=null?a:"pink"}};
    border:0;
    border:1px solid ${t=>{var a;return(a=t.border)!=null?a:"transparent"}};
    cursor:pointer;
    white-space: nowrap;
    margin:0 5px;
    svg{
        margin-right:5px;
    }
`,O=({label:t,icon:a,color:l,bgColor:s,border:i,eventCallback:c})=>r(F1,{bgColor:s,color:l,border:i,onClick:c,children:[a&&a,t]});function y(t){return e("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.043 8C16.043 3.58086 12.4621 0 8.04297 0C3.62383 0 0.0429688 3.58086 0.0429688 8C0.0429688 9.35923 0.382468 10.6697 1.02145 11.8362C1.51376 12.7345 2.17257 13.5302 2.95941 14.1772C4.38075 15.3485 6.16227 16 8.04297 16C12.4621 16 16.043 12.4191 16.043 8ZM1.04297 8C1.04297 4.13314 4.17611 1 8.04297 1C11.9098 1 15.043 4.13314 15.043 8C15.043 11.8669 11.9098 15 8.04297 15C6.39646 15 4.83923 14.4305 3.59495 13.4051C2.90627 12.8389 2.3295 12.1422 1.89844 11.3557C1.3397 10.3356 1.04297 9.19029 1.04297 8ZM7.33586 8L4.77242 10.5634C4.57715 10.7587 4.57715 11.0753 4.77242 11.2706C4.96768 11.4658 5.28426 11.4658 5.47952 11.2706L8.04297 8.70711L10.6064 11.2706C10.8017 11.4658 11.1183 11.4658 11.3135 11.2706C11.5088 11.0753 11.5088 10.7587 11.3135 10.5634L8.75008 8L11.3135 5.43655C11.5088 5.24129 11.5088 4.92471 11.3135 4.72945C11.1183 4.53418 10.8017 4.53418 10.6064 4.72945L8.04297 7.29289L5.47952 4.72945C5.28426 4.53418 4.96768 4.53418 4.77242 4.72945C4.57715 4.92471 4.57715 5.24129 4.77242 5.43655L7.33586 8Z",fill:"#3FA110"})})}function Z1(t){return e("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.09427 0C9.43258 0 12.1373 2.70503 12.1373 6.044C12.1373 7.53264 11.5991 8.89555 10.7066 9.94873L15.904 15.1461C16.0993 15.3414 16.0993 15.658 15.904 15.8533C15.7088 16.0485 15.3922 16.0485 15.1969 15.8533L9.99954 10.6559C8.94633 11.5486 7.58325 12.087 6.09427 12.087C2.75646 12.087 0.0512695 9.38147 0.0512695 6.044C0.0512695 2.70503 2.75596 0 6.09427 0ZM6.09427 1C3.30827 1 1.05127 3.25728 1.05127 6.044C1.05127 8.82922 3.30877 11.087 6.09427 11.087C8.87977 11.087 11.1373 8.82922 11.1373 6.044C11.1373 3.25728 8.88027 1 6.09427 1Z",fill:"#FEFEFE"})})}const S1=u.div`
    max-width:115px;
    padding:5px 10px;
    display:flex;
    height:30px;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    background:${t=>{if(t.value=="vigente")return"#d7e6c8";if(t.value=="inativo")return"#ccd3cd";if(t.value=="encerrado")return"transparent"}};
    color:${t=>{if(t.value=="vigente")return"#49a51c";if(t.value=="inativo")return"#5a645a";if(t.value=="encerrado")return"#c07574"}};
    border:${t=>{if(t.value=="encerrado")return"1px solid #c07574"}};
    svg{
        margin-right:5px;
        path{
            fill:${t=>t.value=="encerrado"?"#c07574":""};
        }
    }
`,H1=({value:t})=>r(S1,{value:t,children:[t=="vigente"&&e(y,{}),t=="encerrado"&&e(y,{}),t=="inativo"&&e(y,{}),t]}),M=[{id:"1",coverage:"Ag\xEAncia",central:"1001",cooperative:1586,agency:22,date_start:"13/10/2021",date_end:"14/10/2021",situation:"vigente"},{id:"2",coverage:"Ag\xEAncia",central:"1002",cooperative:1586,agency:23,date_start:"14/10/2021",date_end:"15/10/2021",situation:"encerrado"},{id:"3",coverage:"Ag\xEAncia",central:"1003",cooperative:1586,agency:24,date_start:"15/10/2021",date_end:"16/10/2021",situation:"inativo"},{id:"4",coverage:"Ag\xEAncia",central:"1001",cooperative:1586,agency:25,date_start:"16/10/2021",date_end:"17/10/2021",situation:"vigente"},{id:"5",coverage:"Cooperativa",central:"1001",cooperative:1586,agency:25,date_start:"17/10/2021",date_end:"18/10/2021",situation:"vigente"},{id:"6",coverage:"Cooperativa",central:"1001",cooperative:1586,agency:25,date_start:"17/10/2021",date_end:"18/10/2021",situation:"vigente"},{id:"7",coverage:"Cooperativa",central:"1001",cooperative:1586,agency:25,date_start:"17/10/2021",date_end:"18/10/2021",situation:"vigente"}],N1=[{label:"Cooperativa",value:"Cooperativa"},{label:"Ag\xEAncia",value:"Ag\xEAncia"}],k1=[{label:"1001",value:"1001"},{label:"1235",value:"1235"}],I1=[{label:"1586",value:"1586"},{label:"2568",value:"2568"}],_1=[{label:"22",value:"22"},{label:"23",value:"23"},{label:"24",value:"24"},{label:"25",value:"25"}],O1=[{label:"Vigente",value:"Vigente"},{label:"Encerrado",value:"Encerrado"},{label:"Inativo",value:"Inativo"}],D1=N(()=>({ul:{"& .MuiPaginationItem-root.Mui-selected":{color:"#FFF",background:"var(--green)"}}}));function B1(){const[t,a]=v.exports.useState(M),[l,s]=v.exports.useState(1),[i,c]=v.exports.useState(5),C=D1(),w=(n,A)=>{s(A)},[E,F]=v.exports.useState(null),Z=Boolean(E),D=n=>{F(n.currentTarget)},b=()=>{F(null)},[o,g]=v.exports.useState({coverage:"",central:"",cooperative:"",agency:"",situation:"",id:"",date_start:null,date_end:null}),B=v.exports.useCallback(()=>{g({coverage:"",central:"",cooperative:"",agency:"",situation:"",id:"",date_start:null,date_end:null}),a(M)},[]),P=()=>{const n=M.filter(A=>Object.entries(o).filter(([m,f])=>f!=""&&f!=null).every(([m,f])=>{if(m=="date_start"||m=="date_end"){let V=c1(f,"dd/MM/yyyy");return A[m]==V}else return A[m]==f}));a(n)};return r(y1,{children:[e(m1,{}),r("div",{className:"container",children:[e(x1,{children:"Comit\xEA Jovem: Comit\xEAs e mandatos"}),r(L1,{children:[e("a",{href:"",children:"In\xEDcio"}),e("a",{href:"",children:"Gest\xE3o de comit\xEAs"}),e("span",{children:"Comit\xEAs e Mandatos"})]}),r("div",{className:"filters",children:[r("div",{className:"row",children:[e("div",{className:"item",children:e(x,{variant:"standard",label:"Abrang\xEAncia",value:o.coverage,options:N1,onChangeCallback:n=>{g(p(h({},o),{coverage:n}))}})}),e("div",{className:"item",children:e(x,{variant:"standard",label:"Central",value:o.central,options:k1,onChangeCallback:n=>{g(p(h({},o),{central:n}))}})}),e("div",{className:"item",children:e(x,{variant:"standard",label:"Cooperativa",value:o.cooperative,options:I1,onChangeCallback:n=>{g(p(h({},o),{cooperative:n}))}})}),e("div",{className:"item",children:e(x,{variant:"standard",label:"Ag\xEAncia",value:o.agency,options:_1,onChangeCallback:n=>{g(p(h({},o),{agency:n}))}})})]}),r("div",{className:"row",children:[e("div",{className:"item",children:e(x,{variant:"standard",label:"Situa\xE7\xE3o",value:o.situation,options:O1,onChangeCallback:n=>{g(p(h({},o),{situation:n}))}})}),e("div",{className:"item",children:e(M1,{type:"number",label:"N\xFAmero",value:o.id,onChangeCallback:n=>{g(p(h({},o),{id:n}))}})}),e("div",{className:"item",children:e(_,{label:"Data In\xEDcio",value:o.date_start,onChangeCallback:n=>{g(p(h({},o),{date_start:n}))}})}),e("div",{className:"item",children:e(_,{label:"Data de T\xE9rmino",value:o.date_end,onChangeCallback:n=>{g(p(h({},o),{date_end:n}))}})}),r("div",{className:"item",children:[e(O,{color:"var(--green)",eventCallback:B,border:"var(--green)",label:"Limpar Filtros",icon:e(y,{})}),e(O,{color:"#FFF",bgColor:"var(--green)",label:"Filtrar",icon:e(Z1,{}),eventCallback:P})]})]}),r("div",{className:"table-committees",children:[e(G,{component:e1,children:r(t1,{"aria-label":"simple table",children:[e(a1,{children:r(I,{children:[e(d,{children:"N\xFAmero do Comit\xEA"}),e(d,{align:"right",children:"Abrang\xEAncia"}),e(d,{align:"right",children:"Central"}),e(d,{align:"right",children:"Cooperativa"}),e(d,{align:"right",children:"Ag\xEAncia"}),r(d,{align:"right",children:["Data In\xEDcio ",e("br",{})," Data Fim"]}),e(d,{align:"center",children:"Situa\xE7\xE3o"}),e(d,{align:"left"})]})}),e(n1,{children:t.slice((l-1)*i,(l-1)*i+i).map(n=>r(I,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(d,{component:"th",scope:"row",children:n.id}),e(d,{align:"right",children:n.coverage}),e(d,{align:"right",children:n.central}),e(d,{align:"right",children:n.cooperative}),e(d,{align:"right",children:n.agency}),r(d,{align:"right",children:[n.date_start," ",e("br",{})," ",n.date_end]}),r(d,{align:"right",children:[e(H1,{value:n.situation})," "]}),r(d,{align:"right",children:[e(i1,{id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":Z?"true":void 0,onClick:D,children:e(l1,{sx:{color:"var(--green)"}})}),r(r1,{id:"basic-menu",anchorEl:E,open:Z,onClose:b,children:[e(L,{onClick:b,children:"Editar"}),e(L,{onClick:b,children:"Inativar"}),e(L,{onClick:b,children:"Excluir"})]})]})]},n.id))})]})}),e(o1,{count:Math.ceil(t.length/i),page:l,onChange:w,style:{marginTop:"30px",display:"flex",justifyContent:"center"},classes:{ul:C.ul}})]})]})]})]})}d1.render(r(s1.StrictMode,{children:[e(h1,{}),e(B1,{})]}),document.getElementById("root"));
