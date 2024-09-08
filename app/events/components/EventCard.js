import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <Card className="w-100 mx-auto" style={{ maxWidth: "400px" }}>
      <CardBody>
        <CardTitle tag="h5">{event.eventName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {event.clubName}
        </CardSubtitle>

        <div className="my-3">
          <div className="d-flex align-items-center mb-2">
            <Calendar className="me-2" size={18} />
            <CardText className="mb-0">{event.date}</CardText>
          </div>
          <div className="d-flex align-items-center mb-2">
            <Clock className="me-2" size={18} />
            <CardText className="mb-0">{`${event.time.start} - ${event.time.end}`}</CardText>
          </div>
          <div className="d-flex align-items-center mb-2">
            <MapPin className="me-2" size={18} />
            <CardText className="mb-0">{`${event.location.building}, ${event.location.room}`}</CardText>
          </div>
          <div className="d-flex align-items-center mb-2">
            <Users className="me-2" size={18} />
            <CardText className="mb-0">{`${event.currentAttendees}/${event.maxAttendees} attendees`}</CardText>
          </div>
        </div>

        <CardText>{event.description}</CardText>

        <div className="mb-3">
          {event.categories.map((category, index) => (
            <Badge key={index} color="secondary" className="me-1">
              {category}
            </Badge>
          ))}
        </div>

        {event.registrationRequired && (
          <CardText className="text-danger">
            Registration required by {event.registrationDeadline}
          </CardText>
        )}
      </CardBody>
    </Card>
  );
};

export default EventCard;
