import React from 'react';
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom'
import Button from 'material-ui/Button';
import { Typography } from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';
import NovelList from './NovelList';
import { Grid } from 'material-ui';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import store from '../demoStore'
import moment from 'moment'


const styles = (theme) => ({
    root: {
    },
    detail: {
        padding: theme.spacing.unit * 2,
    }

});

class Contest extends React.Component {
    state = {
        value: 1,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentWillMount = () => {
        const { contestId } = this.props.match.params;
        const { fetchContest } = this.props
        fetchContest(contestId);
    }

    render() {
        const { classes, match, contest } = this.props;
        const { contestId } = match.params;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Typography variant='headline'>
                    {contest.title}
                </Typography>

                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="企画詳細" />
                    <Tab label="参加作品一覧" />
                </Tabs>

                {value === 0 &&
                    <div className={classes.detail}>
                        <Grid container justify='center'>
                            <Grid item xs={12} sm={8} lg={6}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant='subheading'>
                                            企画詳細

                                        </Typography>
                                        <Typography >
                                            {contest.overview}
                                        </Typography>
                                        <Typography variant='subheading'>
                                            投稿受付期間：{moment(contest.entryPeriod).lang('ja').format('YYYY年MM月DD日 HH時mm分ss秒')}
                                        </Typography>
                                        <Typography variant='subheading'>
                                            作品公開日　：{moment(contest.startContestAt).lang('ja').format('YYYY年MM月DD日 HH時mm分ss秒')}
                                        </Typography>
                                        <Typography variant='subheading'>
                                            投票受付期間：{moment(contest.contestPeriod).lang('ja').format('YYYY年MM月DD日 HH時mm分ss秒')}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button color='primary' variant="raised" component={NavLink} to={'/applyContest/' + contestId}>コンテストに参加する</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>

                }
                {
                    value === 1 &&
                    <NovelList novels={contest.novels} />
                }
            </div>

        )

    }
}

export default withStyles(styles)(Contest)
