import React from "react"
import {
  StyledIcon,
  Container,
  RoomName,
  IndicatorsContainer,
  ErrorIndicator,
  WarningIndicator,
  UnreachableIndicator,
} from "./styled"

/* Counters are commented out, but might be used, UI is ready - if we have data */
// const getAlarmsCount = (count: number) => (count > 99 ? "99+" : `${count}`)

interface Props {
  room: any
  spaceSlug: string
}

export const RoomLabel = ({ room, spaceSlug }: Props) => {
  const alarmCounter = room.alarmCounter || ({} as any)

  const handleSelectRoom = () => {
    // navigate to cloud room
  }
  const href = `/spaces/${spaceSlug}/rooms/${room.slug}`

  return (
    <Container onClick={handleSelectRoom}>
      <StyledIcon name="room" />
      <RoomName
        href={href}
        target="_PARENT"
      >
        {room.name}
      </RoomName>
      <IndicatorsContainer>
        {alarmCounter?.critical > 0 && (
          <ErrorIndicator>
            {/* <StyledCount>{getAlarmsCount(alarmCounter.critical)}</StyledCount> */}
          </ErrorIndicator>
        )}
        {alarmCounter?.warning > 0 && (
          <WarningIndicator>
            {/* <StyledCount>{getAlarmsCount(alarmCounter.warning)}</StyledCount> */}
          </WarningIndicator>
        )}
        {alarmCounter?.unreachable > 0 && (
          <UnreachableIndicator>
            {/* <UnreachableCount>{getAlarmsCount(alarmCounter.warning)}</UnreachableCount> */}
          </UnreachableIndicator>
        )}
      </IndicatorsContainer>
    </Container>
  )
}
