import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data-examples/user.json';
import data from '../data-examples/data.json';
import friends from '../data-examples/friends.json';
import transactions from '../data-examples/transactions.json';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
    return (
        <>
            <h2>1 - Профиль социальной сети</h2>
            <Profile
                username={username}
                tag={tag}
                location={location}
                avatar={avatar}
                stats={stats}
            />
            <h2>2 - Секция статистики</h2>
            <Statistics title="Upload stats" stats={data} />
            <h2>3 - Список друзей</h2>
            <FriendList friends={friends} />
            <h2>4 - История транзакций</h2>
            <TransactionHistory items={transactions} />
        </>
    );
};
