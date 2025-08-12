import React from 'react';
import { 
  MessageCircle, 
  Heart, 
  Share, 
  MoreHorizontal, 
  User, 
  Calendar,
  MapPin,
  Star,
  ThumbsUp,
  Reply,
  Download,
  ExternalLink,
  FileText,
  Video
} from 'lucide-react';

// Simple Activity Feed
export function  SimpleActivityFeed   ()   {
  const activities = [
    {
      id: 1,
      user: { name: 'Emily Johnson', avatar: null },
      action: 'commented on',
      target: 'Wireframe Review',
      time: '2 hours ago',
      type: 'comment'
    },
    {
      id: 2,
      user: { name: 'Michael Chen', avatar: null },
      action: 'uploaded',
      target: 'Design System v2.0',
      time: '4 hours ago',
      type: 'upload'
    },
    {
      id: 3,
      user: { name: 'Sarah Williams', avatar: null },
      action: 'created',
      target: 'New Project Proposal',
      time: '1 day ago',
      type: 'create'
    },
    {
      id: 4,
      user: { name: 'Alex Rodriguez', avatar: null },
      action: 'completed',
      target: 'User Research Phase',
      time: '2 days ago',
      type: 'complete'
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'comment': return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case 'upload': return <Download className="h-4 w-4 text-green-500" />;
      case 'create': return <FileText className="h-4 w-4 text-purple-500" />;
      case 'complete': return <Star className="h-4 w-4 text-yellow-500" />;
      default: return <User className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                  {getActivityIcon(activity.type)}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user.name}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Social Media Feed
export function  SocialMediaFeed  ()   {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Jessica Parker',
        username: '@jessicaparker',
        avatar: null
      },
      content: 'Just launched our new design system! Really excited about the improved accessibility features and component flexibility. Thanks to the amazing team who made this possible. 🎉',
      timestamp: '3 hours ago',
      likes: 24,
      comments: 8,
      shares: 3,
      type: 'text'
    },
    {
      id: 2,
      author: {
        name: 'David Kim',
        username: '@davidkim',
        avatar: null
      },
      content: 'Beautiful sunset from today\'s team retreat. Sometimes the best ideas come when you step away from the screen.',
      timestamp: '1 day ago',
      likes: 45,
      comments: 12,
      shares: 7,
      type: 'image'
    },
    {
      id: 3,
      author: {
        name: 'Maria Santos',
        username: '@mariasantos',
        avatar: null
      },
      content: 'Quick tip: Always prototype your responsive designs on actual devices. What looks good in dev tools might not work in reality.',
      timestamp: '2 days ago',
      likes: 67,
      comments: 15,
      shares: 23,
      type: 'text'
    }
  ];

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg border shadow-sm">
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{post.author.name}</h4>
                  <p className="text-xs text-gray-500">{post.author.username}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{post.timestamp}</span>
                <MoreHorizontal className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-900 text-sm leading-relaxed">{post.content}</p>
              {post.type === 'image' && (
                <div className="mt-3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-gray-400">📷 Image</div>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                  <Share className="h-4 w-4" />
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// News Feed with Rich Content
export function  NewsFeed   ()  {
  const articles = [
    {
      id: 1,
      title: 'The Future of Remote Work: Trends and Predictions for 2025',
      summary: 'Exploring how remote work culture continues to evolve and what companies need to know about hybrid workplace strategies.',
      author: 'Taylor Wilson',
      publishedAt: '4 hours ago',
      readTime: '5 min read',
      category: 'Technology',
      image: true,
      bookmarked: false
    },
    {
      id: 2,
      title: 'Sustainable Design Practices: Building for the Future',
      summary: 'How modern design teams are incorporating sustainability principles into their workflow and product development.',
      author: 'Rachel Green',
      publishedAt: '1 day ago',
      readTime: '8 min read',
      category: 'Design',
      image: true,
      bookmarked: true
    },
    {
      id: 3,
      title: 'AI in Creative Industries: Collaboration, Not Replacement',
      summary: 'Understanding how artificial intelligence is becoming a creative partner rather than a threat to human creativity.',
      author: 'James Martinez',
      publishedAt: '3 days ago',
      readTime: '6 min read',
      category: 'AI & Innovation',
      image: false,
      bookmarked: false
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Design': return 'bg-purple-100 text-purple-800';
      case 'AI & Innovation': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <article key={article.id} className="bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <button className={`p-1 rounded-full hover:bg-gray-100 ${article.bookmarked ? 'text-yellow-500' : 'text-gray-400'}`}>
                <Star className={`h-4 w-4 ${article.bookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            {article.image && (
              <div className="mb-4 bg-gray-100 rounded-lg h-40 flex items-center justify-center">
                <div className="text-gray-400">📸 Article Image</div>
              </div>
            )}
            
            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
              {article.title}
            </h2>
            
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {article.summary}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="font-medium">{article.author}</span>
                <span>{article.publishedAt}</span>
                <span>{article.readTime}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="hover:text-gray-700 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                </button>
                <button className="hover:text-gray-700 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button className="hover:text-gray-700 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

// Timeline Feed
export function  TimelineFeed  ()   {
  const events = [
    {
      id: 1,
      title: 'Project Kickoff Meeting',
      description: 'Initial planning session for the new mobile app redesign project.',
      date: 'Today',
      time: '2:00 PM',
      type: 'meeting',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Design Review Completed',
      description: 'Successfully reviewed and approved the wireframes for the dashboard interface.',
      date: 'Yesterday',
      time: '4:30 PM',
      type: 'milestone',
      status: 'completed'
    },
    {
      id: 3,
      title: 'User Research Phase',
      description: 'Conducted interviews with 15 users to gather insights on current pain points.',
      date: '3 days ago',
      time: '10:00 AM',
      type: 'research',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Prototype Testing',
      description: 'Testing session scheduled with the QA team for the interactive prototype.',
      date: 'Next Monday',
      time: '9:00 AM',
      type: 'testing',
      status: 'scheduled'
    }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case 'meeting': return <Calendar className="h-4 w-4" />;
      case 'milestone': return <Star className="h-4 w-4" />;
      case 'research': return <User className="h-4 w-4" />;
      case 'testing': return <FileText className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 border-green-200 text-green-700';
      case 'upcoming': return 'bg-blue-100 border-blue-200 text-blue-700';
      case 'scheduled': return 'bg-yellow-100 border-yellow-200 text-yellow-700';
      default: return 'bg-gray-100 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Project Timeline</h3>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {index !== events.length - 1 && (
                <div className="absolute top-8 left-4 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${getStatusColor(event.status)}`}>
                  {getEventIcon(event.type)}
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                    <div className="text-xs text-gray-500 flex items-center space-x-2">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component showcasing all feed types
export function FeedsDemo  ()  {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Feed Components</h1>
          <p className="text-gray-600">A collection of feed components built with React, Tailwind CSS, and Lucide icons.</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <SimpleActivityFeed />
            <TimelineFeed />
          </div>
          
          <div className="space-y-8">
            <SocialMediaFeed />
          </div>
          
          <div className="lg:col-span-2">
            <NewsFeed />
          </div>
        </div>
      </div>
    </div>
  );
};
