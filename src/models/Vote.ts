import { ResponseData } from "../networking/NetworkResponse";
import EventMinutesItem from "./EventMinutesItem";
import Person from "./Person";
import Event from "./Event";
import Matter from "./Matter";
import { Model } from "./Model";
import { DocumentReference } from "@firebase/firestore";

export default class Vote implements Model {
  id?: string;
  decision?: string;
  event_minutes_item_ref?: string;
  event_minutes_item?: EventMinutesItem;
  event_ref?: string;
  event?: Event;
  external_source_id?: string;
  in_majority?: boolean;
  matter_ref?: string;
  matter?: Matter;
  person_ref?: string;
  person?: Person;

  constructor(jsonData: ResponseData) {
    if (jsonData["id"]) {
      this.id = jsonData["id"];
    }

    if (jsonData["decision"]) {
      this.decision = jsonData["decision"];
    }

    if (jsonData["event_minutes_item_ref"]) {
      if (jsonData["event_minutes_item_ref"] instanceof DocumentReference) {
        this.event_minutes_item_ref = jsonData["event_minutes_item_ref"].id;
      } else if (typeof jsonData["event_minutes_item_ref"] === "object") {
        this.event_minutes_item = new EventMinutesItem(jsonData["event_minutes_item_ref"]);
      }
    }

    if (jsonData["event_ref"]) {
      if (jsonData["event_ref"] instanceof DocumentReference) {
        this.event_ref = jsonData["event_ref"].id;
      } else if (typeof jsonData["event_ref"] === "object") {
        this.event = new Event(jsonData["event_ref"]);
      }
    }

    if (jsonData["external_source_id"]) {
      this.external_source_id = jsonData["external_source_id"];
    }

    if (jsonData["in_majority"]) {
      this.in_majority = jsonData["in_majority"];
    }

    if (jsonData["matter_ref"]) {
      if (jsonData["matter_ref"] instanceof DocumentReference) {
        this.matter_ref = jsonData["matter_ref"].id;
      } else if (typeof jsonData["matter_ref"] === "object") {
        this.matter = new Matter(jsonData["matter_ref"]);
      }
    }

    if (jsonData["person_ref"]) {
      if (jsonData["person_ref"] instanceof DocumentReference) {
        this.person_ref = jsonData["person_ref"].id;
      } else if (typeof jsonData["person_ref"] === "object") {
        this.person = new Person(jsonData["person_ref"]);
      }
    }
  }
}
