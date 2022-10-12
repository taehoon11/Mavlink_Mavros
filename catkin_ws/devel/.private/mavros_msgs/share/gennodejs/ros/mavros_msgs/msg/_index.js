
"use strict";

let TimesyncStatus = require('./TimesyncStatus.js');
let CommandCode = require('./CommandCode.js');
let Mavlink = require('./Mavlink.js');
let RCIn = require('./RCIn.js');
let LandingTarget = require('./LandingTarget.js');
let FileEntry = require('./FileEntry.js');
let HomePosition = require('./HomePosition.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let ParamValue = require('./ParamValue.js');
let HilControls = require('./HilControls.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let ManualControl = require('./ManualControl.js');
let TerrainReport = require('./TerrainReport.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let Param = require('./Param.js');
let ActuatorControl = require('./ActuatorControl.js');
let HilGPS = require('./HilGPS.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let LogData = require('./LogData.js');
let Thrust = require('./Thrust.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let DebugValue = require('./DebugValue.js');
let VehicleInfo = require('./VehicleInfo.js');
let WaypointReached = require('./WaypointReached.js');
let WaypointList = require('./WaypointList.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let Vibration = require('./Vibration.js');
let GPSRAW = require('./GPSRAW.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let GPSINPUT = require('./GPSINPUT.js');
let GPSRTK = require('./GPSRTK.js');
let LogEntry = require('./LogEntry.js');
let PositionTarget = require('./PositionTarget.js');
let BatteryStatus = require('./BatteryStatus.js');
let RTCM = require('./RTCM.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let Trajectory = require('./Trajectory.js');
let ExtendedState = require('./ExtendedState.js');
let MountControl = require('./MountControl.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let State = require('./State.js');
let Tunnel = require('./Tunnel.js');
let RTKBaseline = require('./RTKBaseline.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let HilSensor = require('./HilSensor.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let RadioStatus = require('./RadioStatus.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let VFR_HUD = require('./VFR_HUD.js');
let ESCStatus = require('./ESCStatus.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let RCOut = require('./RCOut.js');
let StatusText = require('./StatusText.js');
let ESCInfo = require('./ESCInfo.js');
let Waypoint = require('./Waypoint.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let Altitude = require('./Altitude.js');

module.exports = {
  TimesyncStatus: TimesyncStatus,
  CommandCode: CommandCode,
  Mavlink: Mavlink,
  RCIn: RCIn,
  LandingTarget: LandingTarget,
  FileEntry: FileEntry,
  HomePosition: HomePosition,
  WheelOdomStamped: WheelOdomStamped,
  ParamValue: ParamValue,
  HilControls: HilControls,
  EstimatorStatus: EstimatorStatus,
  ManualControl: ManualControl,
  TerrainReport: TerrainReport,
  CameraImageCaptured: CameraImageCaptured,
  Param: Param,
  ActuatorControl: ActuatorControl,
  HilGPS: HilGPS,
  OverrideRCIn: OverrideRCIn,
  ADSBVehicle: ADSBVehicle,
  CamIMUStamp: CamIMUStamp,
  LogData: LogData,
  Thrust: Thrust,
  PlayTuneV2: PlayTuneV2,
  ESCTelemetry: ESCTelemetry,
  NavControllerOutput: NavControllerOutput,
  DebugValue: DebugValue,
  VehicleInfo: VehicleInfo,
  WaypointReached: WaypointReached,
  WaypointList: WaypointList,
  OpticalFlowRad: OpticalFlowRad,
  Vibration: Vibration,
  GPSRAW: GPSRAW,
  GlobalPositionTarget: GlobalPositionTarget,
  GPSINPUT: GPSINPUT,
  GPSRTK: GPSRTK,
  LogEntry: LogEntry,
  PositionTarget: PositionTarget,
  BatteryStatus: BatteryStatus,
  RTCM: RTCM,
  CompanionProcessStatus: CompanionProcessStatus,
  HilActuatorControls: HilActuatorControls,
  Trajectory: Trajectory,
  ExtendedState: ExtendedState,
  MountControl: MountControl,
  ESCStatusItem: ESCStatusItem,
  State: State,
  Tunnel: Tunnel,
  RTKBaseline: RTKBaseline,
  HilStateQuaternion: HilStateQuaternion,
  HilSensor: HilSensor,
  ESCInfoItem: ESCInfoItem,
  RadioStatus: RadioStatus,
  AttitudeTarget: AttitudeTarget,
  VFR_HUD: VFR_HUD,
  ESCStatus: ESCStatus,
  ESCTelemetryItem: ESCTelemetryItem,
  OnboardComputerStatus: OnboardComputerStatus,
  RCOut: RCOut,
  StatusText: StatusText,
  ESCInfo: ESCInfo,
  Waypoint: Waypoint,
  MagnetometerReporter: MagnetometerReporter,
  Altitude: Altitude,
};
