import moment from 'moment';
const expenses = [{
    id: '1',
    description: 'gum',
    amount: 10,
    createdAt: 0,
    note: 'nothing'
},
{
    id: '2',
    description: 'rent',
    amount: 50,
    createdAt: moment(0).subtract('4', 'days').valueOf(),
    note: 'lunch'
},
{
    id: '3',
    description: 'credit card',
    amount: 500,
    createdAt: moment(0).add('4', 'days').valueOf(),
    note: 'breakfast'
}
];
export default expenses;