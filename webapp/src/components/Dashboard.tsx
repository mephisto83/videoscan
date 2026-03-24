import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudArrowUp,
  faCheck,
  faDownload,
  faTimes,
  faPlay,
  faFilePdf,
  faFileExcel,
  faFileJson,
} from '@fortawesome/free-solid-svg-icons';
import { VideoFile, SceneSegment, KeyFrame, DetectedObject, VideoAnalysis } from '@/types';

const Dashboard: React.FC = () => {
  const [videos, setVideos] = useState<VideoFile[]>([
    {
      id: '1',
      name: 'product-demo.mp4',
      size: 45.5,
      duration: 120,
      uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      status: 'completed',
      progress: 100,
    },
    {
      id: '2',
      name: 'tutorial-walkthrough.mp4',
      size: 87.3,
      duration: 540,
      uploadedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      status: 'completed',
      progress: 100,
    },
  ]);

  const [selectedVideoId, setSelectedVideoId] = useState<string | null>('1');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedVideo = videos.find((v) => v.id === selectedVideoId);

  const mockAnalysis: VideoAnalysis = {
    videoId: '1',
    scenes: [
      { id: '1', startTime: 0, endTime: 25, label: 'Introduction', color: '#9333ea', confidence: 0.95 },
      { id: '2', startTime: 25, endTime: 45, label: 'Product Demo', color: '#ec4899', confidence: 0.92 },
      { id: '3', startTime: 45, endTime: 65, label: 'Features Overview', color: '#06b6d4', confidence: 0.88 },
      { id: '4', startTime: 65, endTime: 90, label: 'Q&A', color: '#10b981', confidence: 0.85 },
      { id: '5', startTime: 90, endTime: 120, label: 'Closing', color: '#f59e0b', confidence: 0.93 },
    ],
    keyFrames: [
      {
        id: '1',
        timestamp: 5,
        imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop',
        description: 'Opening shot with presenter',
      },
      {
        id: '2',
        timestamp: 30,
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop',
        description: 'Product interface showcase',
      },
      {
        id: '3',
        timestamp: 60,
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        description: 'Team collaboration scene',
      },
      {
        id: '4',
        timestamp: 100,
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        description: 'Call to action',
      },
    ],
    objects: [
      { id: '1', name: 'Person', confidence: 0.96, count: 2, timestamps: [0, 120] },
      { id: '2', name: 'Computer Screen', confidence: 0.92, count: 1, timestamps: [25, 90] },
      { id: '3', name: 'Desk', confidence: 0.88, count: 1, timestamps: [0, 120] },
      { id: '4', name: 'Office Building', confidence: 0.85, count: 1, timestamps: [0, 25] },
      { id: '5', name: 'Text/Labels', confidence: 0.91, count: 12, timestamps: [30, 60] },
    ],
    summary:
      'This video is a professional product demonstration featuring an introduction, detailed product demo, feature overview, Q&A session, and closing remarks. Two presenters are visible throughout, with the main focus on demonstrating software interface and capabilities.',
    totalProcessingTime: 45,
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    const newVideos: VideoFile[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('video/')) {
        const id = Math.random().toString(36).substr(2, 9);
        const newVideo: VideoFile = {
          id,
          name: file.name,
          size: file.size / (1024 * 1024),
          duration: 0,
          uploadedAt: new Date(),
          status: 'uploading',
          progress: 0,
        };
        newVideos.push(newVideo);

        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 30;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setVideos((prev) =>
              prev.map((v) =>
                v.id === id
                  ? { ...v, progress: 100, status: 'processing' }
                  : v
              )
            );
            setTimeout(() => {
              setver:border-primary-400'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {video.name}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {formatFileSize(video.size)}
                          </p>
                        </div>
                        {video.status === 'completed' && (
                          <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        )}
                      </div>
                      {video.progress && video.progress < 100 && (
                        <div className="mt-2 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              video.status === 'uploading'
                                ? 'bg-primary-600'
                                : 'bg-accent-600'
                            }`}
                            style={{ width: `${video.progress}%` }}
                          />
                        </div>
                      ))}
                    </button>
                 ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedVideo && selectedVideo.status === 'completed' ? (
              <>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-6 border border-gray-200 dark:border-gray-700">ockAnalysis.scenes.length}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          Key Frames
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {mockAnalysis.keyFrames.length}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          Objects Found
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {mockAnalysis.objects.length}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          Processing Time
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {mockAnalysis.totalProcessingTime}s
                        </p>
                      </div>
                    </div>
                </div>          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Video Summary
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {mockAnalysis.summary}
                  </p>