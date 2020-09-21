import App from "next/app";
import { PostsProvider } from "../contexts/posts-context";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PostsProvider>
        <Component {...pageProps} />
      </PostsProvider>
    );
  }
}
