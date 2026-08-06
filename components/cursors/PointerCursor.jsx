"use client"

export default function PointerCursor(){

  return(
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="
        drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]
      "
    >

      <path
        d="
          M11 3
          C9.9 3 9 3.9 9 5
          V14
          L7 12
          C6.2 11.2 4.9 11.2 4.1 12
          C3.3 12.8 3.3 14.1 4.1 14.9
          L11 22
          C12 23 13.3 23.5 14.7 23.5
          H18
          C20.8 23.5 23 21.3 23 18.5
          V11
          C23 10.2 22.3 9.5 21.5 9.5
          C20.7 9.5 20 10.2 20 11
          V9
          C20 8.2 19.3 7.5 18.5 7.5
          C17.7 7.5 17 8.2 17 9
          V8
          C17 7.2 16.3 6.5 15.5 6.5
          C14.7 6.5 14 7.2 14 8
          V5
          C14 3.9 13.1 3 12 3
          Z
        "
        fill="#22c55e"
        stroke="#dcfce7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

    </svg>
  )
}