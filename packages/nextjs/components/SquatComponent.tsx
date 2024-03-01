import React, { useCallback, useMemo } from "react";
import { curveMonotoneX } from "@visx/curve";
import { localPoint } from "@visx/event";
import { LinearGradient } from "@visx/gradient";
import { GridColumns, GridRows } from "@visx/grid";
import appleStock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { scaleLinear, scaleTime } from "@visx/scale";
import { AreaClosed, Bar, Line } from "@visx/shape";
import { Tooltip, TooltipWithBounds, defaultStyles, withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { bisector, extent, max } from "@visx/vendor/d3-array";
import { timeFormat } from "@visx/vendor/d3-time-format";

const SquatComponent = () => {
  // Sensitivity is how much the device needs to move in 3D space for a squat to register.
  const sensitivity = 10;

  const [squatState, setSquatState] = useState(false);
  const [count, setCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleDeviceMotion = ({ acceleration }) => {
    if (!squatState && acceleration.y > sensitivity) {
      setSquatState(true);
      setCount(count + 1);
    } else if (squatState && acceleration.y < -sensitivity) {
      setSquatState(false);
    }
  };

  useEffect(() => {
    if (count > 0 && timeoutId === null) {
      const id = setTimeout(() => {
        attest();
        setCount(0);
      }, 12 * 60 * 60 * 1000 /* 12 hours */);
      setTimeoutId(id);
    }
  }, [count]);

  return (
    <DeviceMotion>
      {motionData => {
        handleDeviceMotion(motionData);
        return (
          // component design goes here
          <>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={attest}
            >
              Attest
            </button>
            <p>Score: {count}</p>
          </>
        );
      }}
    </DeviceMotion>
  );
};
