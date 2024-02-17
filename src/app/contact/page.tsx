import styles from "./page.module.css";

export default function Form() {
  return (
    // <main>
    //   <h1>Hello Daniel.</h1>
    // </main>
    <main>
      <h1>Let's work together.</h1>
      <form>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
