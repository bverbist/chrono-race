/* setInterval clearInterval */

import React from 'react';
import {getCurrentTimestamp, NO_TIMESTAMP} from '../../util/timeUtil';
import {getNotStartedChronoTime, formatAsChronoTime} from '../../util/chronoUtil';

const CHRONO_INTERVAL_IN_MILLIS = 1000;

class Chrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTimestamp: NO_TIMESTAMP
        };
        this.interval = null;
        this.tick = this.tick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.isStarted(nextProps.startTimestamp)) {
            if (this.isStopped(nextProps.stopTimestamp)) {
                if (this.isIntervalRunning()) {
                    this.stopInterval();
                }
            } else if (!this.isIntervalRunning()) {
                this.tick();
                this.startInterval();
            }
        }
    }

    isStarted(startTimestamp) {
        return startTimestamp !== NO_TIMESTAMP;
    }

    isStopped(stopTimestamp) {
        return stopTimestamp !== NO_TIMESTAMP;
    }

    isIntervalRunning() {
        return this.interval != null;
    }

    startInterval() {
        if (this.isIntervalRunning()) {
            return;
        }
        this.interval = setInterval(this.tick, CHRONO_INTERVAL_IN_MILLIS);
    }

    stopInterval() {
        clearInterval(this.interval);
        this.interval = null;
    }

    tick() {
        this.setState({
            currentTimestamp: getCurrentTimestamp()
        });
    }

    render() {
        let chronoTime;

        if (this.isStarted(this.props.startTimestamp)) {
            const isStopped = this.isStopped(this.props.stopTimestamp);

            const endTimestamp = isStopped ?
                this.props.stopTimestamp :
                this.state.currentTimestamp;

            chronoTime = formatAsChronoTime(this.props.startTimestamp, endTimestamp, isStopped);
        } else {
            chronoTime = getNotStartedChronoTime();
        }

        return (
            <div className="chronometer">
                {chronoTime}
            </div>
        );
    }
}

export default Chrono;