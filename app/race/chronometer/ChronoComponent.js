/* setInterval clearInterval */

import React from 'react';
import {getCurrentTimestamp, NO_TIMESTAMP} from '../../util/timeUtil';
import {prefixWithZero} from '../../util/numberUtil';

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
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        if (this.isStarted(this.props.startTimestamp)) {
            const endTimestamp = this.isStopped(this.props.stopTimestamp) ?
                this.props.stopTimestamp : this.state.currentTimestamp;

            const elapsedMillis = endTimestamp - this.props.startTimestamp;
            const elapsedSeconds = Math.round(elapsedMillis / 1000);

            minutes = Math.floor(elapsedSeconds / 60);
            seconds = elapsedSeconds % 60;

            if (minutes >= 60) {
                hours = Math.floor(minutes / 60);
                minutes %= 60;
            }
        }

        return (
            <div className="chronometer">
                <div>{prefixWithZero(hours)}:{prefixWithZero(minutes)}:{prefixWithZero(seconds)}</div>
            </div>
        );
    }
}

export default Chrono;