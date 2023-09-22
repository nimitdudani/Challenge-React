import "./SvgIcon.scss";

const listIcon = {
  home: `<path d='M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z'></path>`,
  done: `<path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>`,
  document: `<path d="M21.5 28h-14.5c-1.105 0-2-0.902-2-2.001v-18.998c0-1.105 0.902-2.001 2.001-2.001h18.998c1.105 0 2.001 0.894 2.001 1.994v14.006l-6 7h-0.5zM6 11v15.001c0 0.56 0.451 0.999 1.007 0.999h13.993v-4.994c0-1.119 0.895-2.006 1.998-2.006h4.002v-9h-21zM6 10h21v-2.993c0-0.557-0.447-1.007-0.999-1.007h-19.003c-0.56 0-0.999 0.447-0.999 0.999v3.001zM22 26.5l4.7-5.5h-3.703c-0.546 0-0.997 0.452-0.997 1.009v4.491zM13 18v1h7v-1h-7zM8 17h3v3h-3v-3zM9 18v1h1v-1h-1zM13 14v1h12v-1h-12zM8 13h3v3h-3v-3zM9 14v1h1v-1h-1zM13 22v1h6v-1h-6zM8 21h3v3h-3v-3zM9 22v1h1v-1h-1z"></path>`,
  error: `<path d="M11.364 21h-4.361c-2.205 0-4.003-1.791-4.003-4 0-1.895 1.325-3.488 3.101-3.898v0c-0.066-0.357-0.101-0.726-0.101-1.102 0-3.314 2.686-6 6-6 2.615 0 4.84 1.673 5.661 4.008 0.774-0.63 1.762-1.008 2.839-1.008 2.358 0 4.293 1.814 4.484 4.123v0c1.73 0.44 3.016 2.009 3.016 3.877 0 2.205-1.792 4-4.003 4h-4.361l-4.136-7-4.136 7zM20.227 22h3.773c2.761 0 4.999-2.244 4.999-5 0-2.096-1.287-3.892-3.117-4.634v0c-0.523-2.493-2.734-4.366-5.383-4.366-0.863 0-1.679 0.199-2.406 0.553-1.203-2.121-3.481-3.553-6.094-3.553-3.866 0-7 3.134-7 7 0 0.138 0.004 0.275 0.012 0.412v0c-1.772 0.77-3.012 2.538-3.012 4.588 0 2.761 2.232 5 4.999 5h3.773l-1.773 3h13l-1.773-3zM15.5 16l4.75 8h-9.5l4.75-8zM15 18v3h1v-3h-1zM15 22v1h1v-1h-1z"></path>`,
  delete: `<path d="M21 6h4v1h-17v-1h4v-1c0-1.112 0.894-2 1.997-2h5.005c1.102 0 1.997 0.895 1.997 2v1zM8 8h17v18.999c0 1.658-1.343 3.001-3 3.001h-11c-1.666 0-3-1.344-3-3.001v-18.999zM12 11v16h1v-16h-1zM16 11v16h1v-16h-1zM20 11v16h1v-16h-1zM14.003 4c-0.554 0-1.003 0.444-1.003 1v1h7v-1c0-0.552-0.438-1-1.003-1h-4.994z"></path>`,
};

function SvgIcon({ icon, color, width = "16px", height = "16px" }) {
  const getIcon = () => {
    return listIcon[icon] || listIcon.home;
  };

  return (
    <>
      <svg
        className={"icon-" + icon}
        viewBox="0 0 32 32"
        width={width}
        height={height}
        dangerouslySetInnerHTML={{ __html: getIcon() }}
        style={{ fill: color }}
      ></svg>
    </>
  );
}

export { SvgIcon };
