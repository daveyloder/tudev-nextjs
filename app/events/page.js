"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupText,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import Link from "next/link";
import EventCard from "./components/EventCard";

import { EVENTS2 } from "../_shared/EVENTS";

const events = EVENTS2;

function EventPage() {
  return (
    <>
      {events.length == 0 ? (
        <Col className="text-center text-white mb-4">
          <h4>Currently No Events</h4>
          <p>Please check back later!</p>
        </Col>
      ) : (
        events.map((event) => {
          return (
            <Col key={event.id} lg={4} md={4} sm={6} className="mb-4">
              <Link
                style={{ textDecoration: "none" }}
                href={event.eventLink}
                target="_blank"
              >
                <EventCard event={event} />
              </Link>
            </Col>
          );
        })
      )}
    </>
  );
}

export default EventPage;
