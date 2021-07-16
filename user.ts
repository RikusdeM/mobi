export class User {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

export function userFromJson(jsonStr: string): User {
    try {
        let usr = JSON.parse(jsonStr)
        console.log("Created new User : " + usr.name)
        return new User(usr.name)
    } catch (e) {
        console.log("COULD NOT CREATE USER FROM INPUT")
    }
}

class Plan {
    name: string;
    space: number;
    private_repos: number;
    collaborators: number;

    constructor(name: string,
                space: number,
                private_repos: number,
                collaborators: number) {

        this.name = name
        this.space = space
        this.private_repos = private_repos
        this.collaborators = collaborators
    }
}

export class GithubUserInfo {
    login: string;
    id?: number;
    node_id?: string;
    avatar_url: string;
    gravatar_id?: string;
    url?: string;
    html_url?: string;
    followers_url: string;
    following_url: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url: string;
    events_url: string;
    received_events_url?: string;
    type: string;
    site_admin?: boolean;
    name: string;
    company: string
    blog: string;
    location: string;
    email: string;
    hireable?: boolean;
    bio?: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    private_gists?: number;
    total_private_repos?: number;
    owned_private_repos?: number;
    disk_usage?: number;
    collaborators?: number;
    two_factor_authentication?: boolean;
    plan?: Plan

    constructor(login: string,
                avatar_url: string,
                followers_url: string,
                following_url: string,
                repos_url: string,
                events_url: string,
                type: string,
                name: string,
                company: string,
                blog: string,
                location: string,
                email: string,
                twitter_username: string,
                public_repos: number,
                public_gists: number,
                followers: number,
                following: number,
                created_at: string,
                updated_at: string,
                id?: number,
                node_id?: string,
                gravatar_id?: string,
                url?: string,
                html_url?: string,
                gists_url?: string,
                starred_url?: string,
                subscriptions_url?: string,
                organizations_url?: string,
                received_events_url?: string,
                site_admin?: boolean,
                hireable?: boolean,
                bio?: string,
                private_gists?: number,
                total_private_repos?: number,
                owned_private_repos?: number,
                disk_usage?: number,
                collaborators?: number,
                two_factor_authentication?: boolean,
                plan?: Plan) {

        this.login = login;
        this.avatar_url = avatar_url;
        this.followers_url = followers_url;
        this.following_url = following_url;
        this.repos_url = repos_url;
        this.events_url = events_url;
        this.type = type;
        this.name = name;
        this.company = company;
        this.blog = blog;
        this.location = location;
        this.email = email;
        this.twitter_username = twitter_username;
        this.public_repos = public_repos;
        this.public_gists = public_gists;
        this.followers = followers;
        this.following = following;
        this.created_at = created_at;
        this.updated_at = updated_at;

        if (typeof id !== 'undefined') {
            this.id = id
        }

        if (typeof node_id !== 'undefined') {
            this.node_id = node_id
        }

        if (typeof gravatar_id !== 'undefined') {
            this.gravatar_id = gravatar_id
        }

        if (typeof url !== 'undefined') {
            this.url = url
        }

        if (typeof html_url !== 'undefined') {
            this.html_url = html_url
        }

        if (typeof gists_url !== 'undefined') {
            this.gists_url = gists_url
        }

        if (typeof starred_url !== 'undefined') {
            this.starred_url = starred_url
        }

        if (typeof subscriptions_url !== 'undefined') {
            this.subscriptions_url = subscriptions_url
        }

        if (typeof organizations_url !== 'undefined') {
            this.organizations_url = organizations_url
        }

        if (typeof received_events_url !== 'undefined') {
            this.received_events_url = received_events_url
        }

        if (typeof site_admin !== 'undefined') {
            this.site_admin = site_admin
        }

        if (typeof hireable !== 'undefined') {
            this.hireable = hireable
        }

        if (typeof bio !== 'undefined') {
            this.bio = bio
        }

        if (typeof private_gists !== 'undefined') {
            this.private_gists = private_gists
        }

        if (typeof total_private_repos !== 'undefined') {
            this.total_private_repos = total_private_repos
        }

        if (typeof owned_private_repos !== 'undefined') {
            this.owned_private_repos = owned_private_repos
        }

        if (typeof disk_usage !== 'undefined') {
            this.disk_usage = disk_usage
        }

        if (typeof collaborators !== 'undefined') {
            this.collaborators = collaborators
        }

        if (typeof two_factor_authentication !== 'undefined') {
            this.two_factor_authentication = two_factor_authentication
        }

        if (typeof plan !== 'undefined') {
            this.plan = plan
        }

    }


}

export function gitHubUserInfoFromJson(userInfo: string): GithubUserInfo {
    let usr = JSON.parse(userInfo)
    try {
        if (typeof usr.login &&
            typeof usr.avatar_url &&
            typeof usr.followers_url &&
            typeof usr.following_url &&
            typeof usr.repos_url &&
            typeof usr.events_url &&
            typeof usr.type &&
            typeof usr.name &&
            typeof usr.company &&
            typeof usr.blog &&
            typeof usr.location &&
            typeof usr.email &&
            typeof usr.twitter_username &&
            typeof usr.public_repos &&
            typeof usr.public_gists &&
            typeof usr.followers &&
            typeof usr.following &&
            typeof usr.created_at &&
            typeof usr.updated_at !== 'undefined') {
            return new GithubUserInfo(usr.login,
                usr.avatar_url,
                usr.followers_url,
                usr.following_url,
                usr.repos_url,
                usr.events_url,
                usr.type,
                usr.name,
                usr.company,
                usr.blog,
                usr.location,
                usr.email,
                usr.twitter_username,
                usr.public_repos,
                usr.public_gists,
                usr.followers,
                usr.following,
                usr.created_at,
                usr.updated_at,
                usr.id,
                usr.node_id,
                usr.gravatar_id,
                usr.url,
                usr.html_url,
                usr.gists_url,
                usr.starred_url,
                usr.subscriptions_url,
                usr.organizations_url,
                usr.received_events_url,
                usr.site_admin,
                usr.hireable,
                usr.bio,
                usr.private_gists,
                usr.total_private_repos,
                usr.owned_private_repos,
                usr.disk_usage,
                usr.collaborators,
                usr.two_factor_authentication,
                usr.plan)
        }
    } catch (e) {
        console.log("COULD NOT CREATE GITHUBUSERINFO")
    }
}