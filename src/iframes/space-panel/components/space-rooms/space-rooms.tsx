import React from "react"
import { RoomsPayload } from "utils/api"

import { RoomLabel } from "./room-label"
import {
  RoomListContainer, RoomAddSection, StyledAnnotation, PlusButton,
} from "./styled"

const mockedWorkspace = {}

interface Props {
  roomsResult: RoomsPayload
}
export const SpaceRooms = ({
  roomsResult,
}: Props) => {
  const workspace = mockedWorkspace as any
  const userIsAdmin = true
  const isAllowedToCreateRooms = !workspace.createRoomAdminsOnly || userIsAdmin

  const handleAddRoom = (e: React.SyntheticEvent<HTMLButtonElement, Event>) => {
    e.preventDefault()
    // navigate to room creation?, which is not a route in Cloud SPA (TODO make it so)
  }

  return (
    <>
      {isAllowedToCreateRooms && (
        <RoomAddSection>
          <StyledAnnotation>Rooms</StyledAnnotation>
          <PlusButton icon="plus" onClick={handleAddRoom} />
        </RoomAddSection>
      )}
      <RoomListContainer>
        {roomsResult.results.map((room: any) => (
          <RoomLabel key={room.id} room={room} />
        ))}
      </RoomListContainer>
    </>
  )
}
