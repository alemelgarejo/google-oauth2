import React, { ReactNode, SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "192118991119-t4t27s01k274k0g5jf9mh3o71kahocf1.apps.googleusercontent.com",
  apiKey: "AIzaSyADCKgz1g19krD7G7Re4Ey_MbmTYOX0ykg",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

export default class DoubleButton extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  public handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  }

  render(): ReactNode {
    return (
      <>
        <button onClick={(e) => this.handleItemClick(e, "sign-in")}>
          sign-in
        </button>
        <button onClick={(e) => this.handleItemClick(e, "sign-out")}>
          sign-out
        </button>
      </>
    );
  }
}
