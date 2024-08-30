import Link from "../Router/Link";

function Nav() {
  return (
    <div>
      <ul>
        <Link href="home">
          <li>Home</li>
        </Link>
        <Link href="contacts">
          <li>Contacts</li>
        </Link>
        <Link href="about">
          <li>Abouts</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
