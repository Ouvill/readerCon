import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Tabs, { Tab } from 'material-ui/Tabs';
import Icon from 'material-ui/Icon';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import ContestListItem from './ContestListItem';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        // overflowX: 'hidden'

    },

    container: {
        margin: 'auto',
        padding: theme.spacing.unit,
        width: '95%',
        overflow: 'hidden'
    },


    button: {
        margin: theme.spacing.unit,
        position: 'fixed',
        // zIndex:1,
        bottom: '12%',
        right: '5%'
    },
});

class ContestList extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        this.filterContests(value)
    };

    filterContests(value) {
        const {
            fetchEntryAcceptingContestList,
            fetchVoteAcceptingContestList,
            fetchPastContestList
        } = this.props

        if (value == 0) {
            fetchVoteAcceptingContestList()
        } else if (value == 1) {
            fetchEntryAcceptingContestList()
        } else if (value == 2) {
            fetchPastContestList()
        }
    }

    componentWillMount() {
        this.filterContests(0)
    }

    componentDidUpdate() {
        // this.filterContests()
    }

    render() {
        const { classes, contests } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root} >
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="読者投票受付中" />
                    <Tab label="小説投稿受付中" />
                    <Tab label="過去コンテスト" />
                </Tabs>

                <Grid container className={classes.container} spacing={16}>
                    {contests.map(contest => (
                        <ContestListItem key={contest.contestId} {...contest} />
                    ))

                    }


                </Grid>
                <Button variant="fab" color="secondary" aria-label="edit" className={classes.button} component={NavLink} to='/create/contest'>
                    <Icon>edit_icon</Icon>
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(ContestList);
