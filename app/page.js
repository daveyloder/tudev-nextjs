"use client";

import React from "react";

import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";
import Link from "next/link";
import Image from "next/image";

import { EVENTS } from "./shared/EVENTS";
import { MEMBERS } from "./shared/MEMBERS";
import { PROJECTS } from "./shared/PROJECTS";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import OfficersSection from "@/components/sections/OfficersSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MainHeader from "@/components/headers/MainHeader";

export default function Home() {
  return (
    <>
      {/* Site Header */}
      <MainHeader />

      {/* Site Header */}
      {/* About Section */}
      <AboutSection />
      {/* About Section - end */}
      {/* Upcoming Events Section */}
      <EventsSection events={EVENTS} />
      {/* Upcoming Events Section - end */}
      {/* Officers Section */}
      <OfficersSection members={MEMBERS} />
      {/* Officers Section - end */}
      {/* Projects Section */}
      <ProjectsSection projects={PROJECTS} />
    </>
  );
}
