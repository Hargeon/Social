module Api
  module V1
    class PostsController < ApplicationController
      def index
        posts = Post.order(created_at: :desc)
        render json: posts, status: 200
      end

      def create
        post = Post.new(post_params)
        if post.save
          render json: post, status: 200
        else
          render json: post.errors, status: 403
        end
      end

      def update
        post = Post.find_by(id: params[:id])
        if post.update(post_params)
          render json: post, status: 200
        else
          render json: post.errors, status: 403
        end
      end

      def destroy
        post = Post.find_by(id: params[:id])
        if post
          post.destroy!
          render json: { 'message': 'success' }, status: 200
        else
          render json: { 'message': 'error' }, status: 404
        end
      end

      private

      def post_params
        params.require(:post).permit(:description)
      end
    end
  end
end
