'use client';

import { useState } from 'react';
import { Calendar, Plus, DollarSign, TrendingUp, Users, Video, X } from 'lucide-react';

export default function CreatorDashboard() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    seriesName: '',
    plannedPublishDate: '',
    description: '',
    adSlots: [] as Array<{
      slotType: string;
      reservePrice: string;
      duration?: string;
      position?: string;
    }>,
  });

  const stats = {
    totalEarnings: 12450,
    activeBids: 8,
    upcomingContent: 5,
    avgEngagement: 4.2,
  };

  const contentListings = [
    {
      id: '1',
      title: 'Complete React Tutorial 2024',
      topic: 'Web Development',
      plannedDate: '2024-12-15',
      bids: 3,
      highestBid: 500,
      status: 'active',
    },
    {
      id: '2',
      title: 'My Morning Routine as a Developer',
      topic: 'Lifestyle',
      plannedDate: '2024-12-18',
      bids: 5,
      highestBid: 750,
      status: 'active',
    },
  ];

  const adSlotTypes = [
    { value: 'IN_VIDEO_INTEGRATION', label: 'In-Video Integration' },
    { value: 'LIVE_MENTION', label: 'Live Mention' },
    { value: 'STORY', label: 'Story' },
    { value: 'SHOUTOUT', label: 'Shoutout' },
    { value: 'DESCRIPTION_LINK', label: 'Description Link' },
  ];

  const addAdSlot = () => {
    setFormData({
      ...formData,
      adSlots: [
        ...formData.adSlots,
        { slotType: 'IN_VIDEO_INTEGRATION', reservePrice: '', duration: '60', position: 'middle' },
      ],
    });
  };

  const removeAdSlot = (index: number) => {
    setFormData({
      ...formData,
      adSlots: formData.adSlots.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = () => {
    console.log('Creating content listing:', formData);
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">AdStream</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white font-medium">Dashboard</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Bids</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Deals</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Analytics</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-60
